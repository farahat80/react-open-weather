import React from 'react';
import { render } from 'react-dom';
import ReactWeather from './components/ReactWeather';
import XuApiProvider from './providers/XuApi';

render(
  <XuApiProvider
    apiKey="c9bde18387b54395a44130032191106"
    // apikey="YOUR_API_KEY"
    lat="48.135124"
    lon="11.581981"
    lang="en"
    unit="metric"
  >
    {({ data }) => <ReactWeather forecast data={data} />}
  </XuApiProvider>,
  document.getElementById('root'),
);
