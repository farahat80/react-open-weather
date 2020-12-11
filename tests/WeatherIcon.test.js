import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import snapshot from 'check-snapshot';
import WeatherIcon from '../src/js/components/WeatherIcon';

describe('WeatherIcon', () => {
  test('render WeatherIcon', () => {
    snapshot(
      <WeatherIcon
        path="svg path here"
        size={120}
        color="white"
        title="icon description"
      />,
    );
  });
});
