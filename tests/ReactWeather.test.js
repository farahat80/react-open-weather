import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { checkSnapshot } from './test-utils';
import ReactWeather from '../src/js/components/ReactWeather';
import { mappedForecast as forecast } from './fixtures/openweather/forecast';
import { mappedCurrent as current } from './fixtures/openweather/current';

describe('ReactWeather', () => {
  test('should render the loader when isLoading is true ', () => {
    checkSnapshot(
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
    checkSnapshot(
      <ReactWeather
        data={null}
        errorMessage="error occurred"
        isLoading={false}
      />,
    );
  });
  test('should render null when no data is provided', () => {
    checkSnapshot(
      <ReactWeather data={null} errorMessage={null} isLoading={false} />,
    );
  });
  test('should render the ReactWeather component', () => {
    const data = {
      forecast,
      current,
    };
    checkSnapshot(
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
