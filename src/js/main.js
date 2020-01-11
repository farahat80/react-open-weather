import React from 'react';
import { render } from 'react-dom';
import ReactWeather from './components/ReactWeather';

render(
  <ReactWeather
    forecast="5days"
    apikey="f9f6c13251c3bbc7394f9799de2ca219"
    type="city"
    city="Munich"
    lang="en"
  />,
  document.getElementById('root')
);
