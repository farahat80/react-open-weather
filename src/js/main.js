import React from 'react';
import { render } from 'react-dom';
import ReactWeather, { useOpenWeather, useWeatherBit } from '.';

const App = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'YOUR_API_KEY',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric',
  });
  // const { data, isLoading, errorMessage } = useWeatherBit({
  //   lat: '48.137154',
  //   lon: '11.576124',
  //   lang: 'en',
  //   key: 'YOUR_API_KEY',
  //   unit: 'M',
  // });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

render(<App />, document.getElementById('root'));
