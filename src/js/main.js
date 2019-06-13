import React from 'react';
import { render } from 'react-dom';
import ReactWeather from './components/ReactWeather';

render(
  <ReactWeather
    forecast
    // apikey="YOUR_API_KEY"
    apikey="c9bde18387b54395a44130032191106"
    lat="48.135124"
    lon="11.581981"
    lang="en"
  />,
  document.getElementById('root'),
);
