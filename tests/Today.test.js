import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import snapshot from 'check-snapshot';
import Today from '../src/js/components/Today';
import { mappedCurrent as current } from './fixtures/openweather/current';

describe('Forecast', () => {
  test('should render the Forecast component', () => {
    const labels = {
      temperature: 'F',
      windSpeed: 'km/h',
    };
    snapshot(
      <Today current={current} unitsLabels={labels} lang="en" theme={{}} />,
    );
  });
});
