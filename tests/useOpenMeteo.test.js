/* eslint-disable import/no-extraneous-dependencies */
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import useOpenMeteo, {
  formatDate,
  mapCurrent,
  mapForecast,
  mapData,
  fetchReducer,
} from '../src/js/providers/open-meteo/useOpenMeteo';
import { mappedCurrent } from './fixtures/openmeteo/current';
import {
  mappedForecast,
  apiForecastResponse,
} from './fixtures/openmeteo/forecast';
import { getIcon, getWeatherDescription } from '../src/js/providers/open-meteo/weatherDescriptionMap';
import svgIcons from '../src/js/svgIcons';

describe('Testing data mapping', () => {
  test('should return formatted date', () => {
    expect(formatDate('1573516800', null, 'Europe/Berlin')).toEqual(
      'Tue 12 November',
    ); // depends on timezone of Javascript runtime. time epoch is relative to UTC
  });

  test('return empty string if input date is invalid', () => {
    expect(formatDate(null)).toEqual('');
  });

  test('should map today data', () => {
    const mapped = mapCurrent(
      {
        temp_max: apiForecastResponse.daily.temperature_2m_max[0],
        temp_min: apiForecastResponse.daily.temperature_2m_min[0]
      },
      apiForecastResponse.current,
      'en',
    );
    expect(mapped).toEqual(mappedCurrent);
  });

  test('should map forecast data', () => {
    const mapped = mapForecast(
      apiForecastResponse.daily,
      'en',
      apiForecastResponse.timezone,
    );
    expect(mapped).toEqual(mappedForecast);
  });

  test('should map combined current and forecast data', () => {
    const mapped = mapData(
      apiForecastResponse,
      'en',
      apiForecastResponse.timezone,
    );
    const expected = {
      current: mappedCurrent,
      forecast: mappedForecast,
    };
    expect(mapped).toEqual(expected);
  });
});

describe('Test useOpenMeteo hook', () => {
  test('gets and map the data', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(() => {
      const response = apiForecastResponse;
      return [200, response];
    });
    const { result, waitForNextUpdate } = renderHook(() =>
      useOpenMeteo({
        key: '1PYNQ6AWUDJE9AFERDCHJHSXK',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric',
      }),
    );

    result.current.fetchData();
    await waitForNextUpdate();

    const expected = {
      current: mappedCurrent,
      forecast: mappedForecast,
    };

    expect(result.current.data).toEqual(expected);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.errorMessage).toEqual(null);
  });

  test('return error when http request fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(500);
    const { result, waitForNextUpdate } = renderHook(() =>
      useOpenMeteo({}),
    );

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

describe('Test Icons & Description Map', () => {
  test('should return the correct icon', () => {
    const icon = getIcon(3);
    expect(icon).toEqual(svgIcons.cloudy);
  });

  test('should return default icon when icon is not found', () => {
    const icon = getIcon('unknown');
    expect(icon).toEqual(svgIcons.sunny);
  });

  test('should return the correct description', () => {
    const desc = getWeatherDescription(3);
    expect(desc).toEqual('Overcast');
  });

  test('should return empty string when code is not found', () => {
    const desc = getWeatherDescription(100);
    expect(desc).toEqual('');
  });
});
