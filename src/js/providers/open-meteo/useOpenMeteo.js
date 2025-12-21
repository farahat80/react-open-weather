import { useEffect, useReducer, useState } from 'react';
import dayjs from 'dayjs';
import utc  from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import axios from 'axios';
import { getWeatherDescription, getIcon } from './weatherDescriptionMap';

dayjs.extend(utc)
dayjs.extend(timezone)

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const initialState = {
  data: null,
  errorMessage: null,
};

export const fetchReducer = (state, { type, payload }) => {
  switch (type) {
    case SUCCESS:
      return {
        data: payload,
        errorMessage: null,
      };
    case FAILURE:
      return { data: null, errorMessage: payload };
    default:
      return state;
  }
};

export const formatDate = (dte, lang, tz) => {
  if (lang && lang !== 'en') {
    dayjs.locale(lang.replace('_', '-'));
  }
  if (dte && dayjs().isValid(dte)) {
    let date=dayjs.unix(dte);
    //without the timezone shift, the output time may be at the whim of the local JavaScript engine timezone 
    if (tz) date=date.tz(tz);
    return date.format('ddd D MMMM');
  }
  return '';
};

export const mapCurrent = (day, current, lang) => {
  const mappedCurrent = {
    date: formatDate(current.time, lang),
    description: getWeatherDescription(current.weather_code),
    icon: current && getIcon(current.weather_code),
    temperature: {
      current: current.temperature_2m.toFixed(0),
      min: day.temp_min.toFixed(0), 
      max: day.temp_max.toFixed(0),
    },
    wind: current.wind_speed_10m.toFixed(0),
    humidity: current.relative_humidity_2m,
  };
  return mappedCurrent
};

export const mapForecast = (days, lang) => {
  const mappedForecast = [];
  
  for (let i = 0; i < 5; i += 1) {
    mappedForecast.push({
      date: formatDate(days.time[i], lang),
      description: getWeatherDescription(days.weather_code[i]),
      icon: getIcon(days.weather_code[i]),
      temperature: {
        min: days.temperature_2m_min[i].toFixed(0),
        max: days.temperature_2m_max[i].toFixed(0),
      },
      wind: days.wind_speed_10m_max[i].toFixed(0),
      humidity: days.relative_humidity_2m_max[i],
    });
  }
  return mappedForecast;
};

export const mapData = (weatherData, lang) => {
  const mapped = {};
  if (weatherData) {
    const tz = weatherData.timezone;
    const days = weatherData.daily;
    const current = weatherData.current;
    const today = {
      temp_max: weatherData.daily.temperature_2m_max[0],
      temp_min: weatherData.daily.temperature_2m_min[0]
    }; 
    mapped.current = mapCurrent(today, current, lang, tz);
    mapped.forecast = mapForecast(days, lang, tz);
  }
  return mapped;
};

const useOpenMeteo = (options) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { data, errorMessage } = state;
  const [isLoading, setIsLoading] = useState(false);
  const { unit, lang, key, lon, lat } = options;
  //end point supports addresses too but stay with lat,lon
  const endpoint = 'https://api.open-meteo.com/v1/forecast';
  const params = {
    latitude: lat,
    longitude: lon,
    daily: 'temperature_2m_max,temperature_2m_min,weather_code,relative_humidity_2m_max,wind_speed_10m_max',
    current: 'temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code',
    forecast_days: 5,
    timeformat: 'unixtime'
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const weatherResponse = await axios.get(endpoint, { params });
      const payload = mapData(
        weatherResponse.data,
        lang,
      );

      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (error) {
      
      dispatch({ type: FAILURE, payload: error.message || error });
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [lon, lat]);
  return { data, isLoading, errorMessage, fetchData };
};


export default useOpenMeteo;
