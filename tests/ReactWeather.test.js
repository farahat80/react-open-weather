import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import snapshot from 'check-snapshot';
import ReactWeather from '../src/js/components/ReactWeather';
import { mappedForecast as forecast } from './fixtures/openweather/forecast';
import { mappedCurrent as current } from './fixtures/openweather/current';

describe('ReactWeather', () => {
  test('should render the loader when isLoading is true ', () => {
    snapshot(
      <ReactWeather
        data={null}
        lang="en"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
        isLoading
      />,
    );
  });
  test('should render the errormessage when provided with one', () => {
    snapshot(
      <ReactWeather
        data={null}
        errorMessage="error occurred"
        isLoading={false}
      />,
    );
  });
  test('should render null when no data is provided', () => {
    snapshot(
      <ReactWeather data={null} errorMessage={null} isLoading={false} />,
    );
  });
  test('should render the ReactWeather component', () => {
    const data = {
      forecast,
      current,
    };
    snapshot(
      <ReactWeather
        data={data}
        lang="en"
        locationLabel="Munich"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />,
    );
  });
});
