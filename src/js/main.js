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
    {({ today, forecast, units, location, isLoading }) => {
      return (
        <ReactWeather
          showForecast
          today={today}
          forecast={forecast}
          units={units}
          location={location}
          isLoading={isLoading}
        />
      );
    }}
  </XuApiProvider>,
  document.getElementById('root'),
);
