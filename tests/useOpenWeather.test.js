/* eslint-disable import/no-extraneous-dependencies */
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useOpenWeather, {
  getLocationParams,
  formatDate,
  mapCurrent,
  mapForecast,
  mapData,
  fetchReducer,
} from '../src/js/providers/openweather/useOpenWeather';
import {
  mappedCurrent,
  apiCurrentResponse,
} from './fixtures/openweather/current';
import {
  mappedForecast,
  apiForecastResponse,
} from './fixtures/openweather/forecast';
import { getIcon } from '../src/js/providers/openweather/iconsMap';

describe('Testing data mapping', () => {
  test('return geo based location params', () => {
    const params = getLocationParams({
      type: 'geo',
      lat: 33,
      lon: 55,
      lang: 'en',
    });
    expect(params).toEqual({
      lat: 33,
      lon: 55,
      lang: 'en',
    });
  });
  test('return city based location params', () => {
    const params = getLocationParams({
      type: 'city',
      city: 'Munich',
      lang: 'en',
    });
    expect(params).toEqual({
      q: 'Munich',
      lang: 'en',
    });
  });
  it('should return formatted date', () => {
    expect(formatDate('1573516800')).toEqual('Tue 12 November');
  });
  it('return empty string if input date is invalid', () => {
    expect(formatDate(null)).toEqual('');
  });
  it('should map today data', () => {
    const mapped = mapCurrent(apiCurrentResponse);
    expect(mapped).toEqual(mappedCurrent);
  });
  it('should map forecast data', () => {
    const mapped = mapForecast(apiForecastResponse.list);
    expect(mapped).toEqual(mappedForecast);
  });
  it('should map combined current and forecast data', () => {
    const mapped = mapData(apiForecastResponse, apiCurrentResponse, 'en');
    const expected = {
      location: 'Munich',
      current: mappedCurrent,
      forecast: mappedForecast,
    };
    expect(mapped).toEqual(expected);
  });
});

describe('Test useOpenWeather hook', () => {
  it('gets and map the data', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(config => {
      let response;
      if (config.url.indexOf('forecast/daily') !== -1) {
        response = apiForecastResponse;
      } else {
        response = apiCurrentResponse;
      }
      return [200, response];
    });
    const { result, waitForNextUpdate } = renderHook(() =>
      useOpenWeather({
        apikey: 'dummy key',
        type: 'city',
        city: 'Munich',
        lang: 'en',
        unit: 'metric',
      }),
    );

    result.current.fetchData();
    await waitForNextUpdate();

    const expected = {
      location: 'Munich',
      current: mappedCurrent,
      forecast: mappedForecast,
    };

    expect(result.current.data).toEqual(expected);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.errorMessage).toEqual(null);
  });

  it('return erro when http request fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(500);
    const { result, waitForNextUpdate } = renderHook(() => useOpenWeather({}));

    result.current.fetchData();
    await waitForNextUpdate();

    expect(result.current.data).toEqual(null);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.errorMessage).toEqual(
      'Request failed with status code 500',
    );
  });
  test('reducer return default state', () => {
    const initialState = { data: 'initial' };
    const newState = fetchReducer(initialState, {
      type: 'non existent action',
    });
    expect(newState).toEqual(initialState);
  });
});

describe('Test Icons Map', () => {
  it('should return the correct icon', () => {
    const icon = getIcon('04d');
    expect(icon).toEqual(
      'M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z',
    );
  });
  it('should return default icon when icon is not found', () => {
    const icon = getIcon('unknown');
    expect(icon).toEqual(
      'M0 15.375q0-0.609 0.422-1.031 0.438-0.406 1-0.406h3.406q0.578 0 0.961 0.422t0.383 1.016-0.383 1.008-0.961 0.414h-3.406q-0.578 0-1-0.422t-0.422-1zM4.766 26.922q0-0.578 0.391-1.016l2.453-2.375q0.375-0.391 0.984-0.391 0.594 0 0.992 0.375t0.398 0.953q0 0.609-0.406 1.063l-2.375 2.375q-1.016 0.797-2.047 0-0.391-0.422-0.391-0.984zM4.766 3.844q0-0.578 0.391-1.016 0.484-0.406 1.063-0.406 0.547 0 0.984 0.406l2.375 2.453q0.406 0.375 0.406 0.984 0 0.594-0.398 0.992t-0.992 0.398q-0.609 0-0.984-0.406l-2.453-2.375q-0.391-0.422-0.391-1.031zM9.016 15.375q0-2.328 1.172-4.336t3.18-3.18 4.336-1.172q1.75 0 3.359 0.695t2.773 1.859 1.852 2.773 0.688 3.359q0 2.344-1.164 4.344t-3.164 3.164-4.344 1.164-4.344-1.164-3.172-3.164-1.172-4.344zM11.844 15.375q0 2.438 1.711 4.164t4.148 1.727 4.164-1.727 1.727-4.164q0-2.406-1.727-4.109t-4.164-1.703q-2.422 0-4.141 1.703t-1.719 4.109zM16.281 28.328q0-0.594 0.414-1t1.008-0.406q0.609 0 1.016 0.406t0.406 1v3.313q0 0.609-0.414 1.031t-1.008 0.422-1.008-0.422-0.414-1.031v-3.313zM16.281 2.5v-3.406q0-0.578 0.422-1t1-0.422 1 0.422 0.422 1v3.406q0 0.578-0.414 0.961t-1.008 0.383-1.008-0.383-0.414-0.961zM25.484 24.469q0-0.578 0.375-0.938 0.375-0.391 0.938-0.391 0.609 0 1 0.391l2.438 2.375q0.406 0.438 0.406 1.016t-0.406 0.984q-1 0.781-2 0l-2.375-2.375q-0.375-0.422-0.375-1.063zM25.484 6.266q0-0.625 0.375-0.984l2.375-2.453q0.438-0.406 0.984-0.406 0.594 0 1.008 0.422t0.414 1q0 0.625-0.406 1.031l-2.438 2.375q-0.453 0.406-1 0.406-0.563 0-0.938-0.398t-0.375-0.992zM29.25 15.375q0-0.594 0.406-1.031 0.406-0.406 0.953-0.406h3.375q0.578 0 1.008 0.43t0.43 1.008-0.43 1-1.008 0.422h-3.375q-0.578 0-0.969-0.414t-0.391-1.008z',
    );
  });
});
