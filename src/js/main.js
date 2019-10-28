import React from 'react';
import { render } from 'react-dom';
import ReactWeather from './components/ReactWeather';
import { useOpenWeather } from './providers/openweather';
import useWeatherBit from './providers/weatherbit/useWeatherBit';

const App = () => {
  //free
  //f9f6c13251c3bbc7394f9799de2ca219
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '7ad07aac9b0943040a4abdd2c23dfc4e',
    type: 'city',
    city: 'Munich',
    lang: 'en',
    unit: 'metric',
  });
  // const { data, isLoading, errorMessage } = useWeatherBit({
  //   type: 'geo',
  //   lat: '48.137154',
  //   lon: '11.576124',
  //   lang: 'en',
  //   key: '8d6f534c1fd94c7382fea6e4716c0bf4',
  // });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

render(<App />, document.getElementById('root'));
