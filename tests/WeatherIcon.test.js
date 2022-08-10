import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { checkSnapshot } from './test-utils';
import WeatherIcon from '../src/js/components/WeatherIcon';

describe('WeatherIcon', () => {
  test('render WeatherIcon', () => {
    checkSnapshot(
      <WeatherIcon
        path="svg path here"
        size={120}
        color="white"
        title="icon description"
      />,
    );
  });
});
