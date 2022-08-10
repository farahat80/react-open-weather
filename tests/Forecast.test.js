import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { checkSnapshot } from './test-utils';
import Forecast from '../src/js/components/Forecast';
import { mappedForecast } from './fixtures/openweather/forecast';

describe('Forecast', () => {
  test('should render the Forecast component', () => {
    const labels = {
      temperature: 'F',
      windSpeed: 'km/h',
    };
    checkSnapshot(
      <Forecast unitsLabels={labels} forecast={mappedForecast} theme={{}} />,
    );
  });
});
