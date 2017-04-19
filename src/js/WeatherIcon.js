import React from 'react';
import 'weather-icons/css/weather-icons.css';
import utils from './utils';

const WeatherIcon = ({ icon }) => {
  const iconCls = utils.getIcon(icon);
  return (<i className={`wicon wi ${iconCls}`}></i>)
}

export default WeatherIcon;