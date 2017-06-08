import React from 'react';
import { render } from 'react-dom';
import ReactWeather from './components/ReactWeather';
import XuApi from './XuApi';
render(
  <ReactWeather
    forecast="5days"
    apikey="5a9719b325d148eda80141801170606"
    type="city"
    city="Munich"
  />,
  document.getElementById('root'));
