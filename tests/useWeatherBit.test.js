/* eslint-disable import/no-extraneous-dependencies */
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useWeatherBit, {
  formatDate,
  mapCurrent,
  mapForecast,
  mapData,
  fetchReducer,
} from '../src/js/providers/weatherbit/useWeatherBit';
import { apiCurrentResponse } from './fixtures/weatherbit/current';
import { apiForecastResponse } from './fixtures/weatherbit/forecast';
import { getIcon } from '../src/js/providers/weatherbit/iconsMap';

describe('Testing data mapping', () => {
  test('should return formatted date', () => {
    expect(formatDate('2019-11-22:10')).toEqual('Fri 22 November');
  });
  test('return empty string if input date is invalid', () => {
    expect(formatDate(null)).toEqual('');
  });
  test('should map today data', () => {
    const mapped = mapCurrent(apiForecastResponse.data[0], 33.33, 'en');
    expect(mapped).toMatchSnapshot();
  });
  test('should map forecast data', () => {
    const mapped = mapForecast(apiForecastResponse.data);
    expect(mapped).toMatchSnapshot();
  });
  test('should map combined current and forecast data', () => {
    const mapped = mapData(
      apiForecastResponse.data,
      apiCurrentResponse.data[0],
      'en',
    );
    expect(mapped).toMatchSnapshot();
  });
});

describe('Test useWeatherBit hook', () => {
  test('gets and map the data', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply((config) => {
      let response;
      if (config.url.indexOf('forecast/daily') !== -1) {
        response = apiForecastResponse;
      } else {
        response = apiCurrentResponse;
      }
      return [200, response];
    });
    const { result, waitForNextUpdate } = renderHook(() =>
      useWeatherBit({
        key: 'dummy key',
        type: 'city',
        city: 'Munich',
        lang: 'en',
        unit: 'metric',
      }),
    );

    result.current.fetchData();
    await waitForNextUpdate();

    expect(result.current.data).toMatchSnapshot();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.errorMessage).toEqual(null);
  });

  test('return erro when http request fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(500);
    const { result, waitForNextUpdate } = renderHook(() => useWeatherBit({}));

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
  test('should return the correct icon', () => {
    const icon = getIcon('511');
    expect(icon).toMatchSnapshot();
  });
  test('should return default icon when icon is not found', () => {
    const icon = getIcon('unknown');
    expect(icon).toMatchSnapshot();
  });
});
