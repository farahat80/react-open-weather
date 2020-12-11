import { useEffect, useReducer } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { getIcon } from './iconsMap';

export const formatDate = (dte) => {
  if (dte && dayjs().isValid(dte)) {
    return dayjs.unix(dte).format('ddd D MMMM');
  }
  return '';
};

export const mapCurrent = (day, lang) => {
  return {
    date: formatDate(day.dt, lang),
    description: day.weather[0] ? day.weather[0].description : null,
    icon: day.weather[0] && getIcon(day.weather[0].icon),
    temperature: {
      current: day.temp.toFixed(0),
      min: undefined, // openweather doesnt provide min/max on current weather
      max: undefined,
    },
    wind: day.wind_speed.toFixed(0),
    humidity: day.humidity,
  };
};

export const mapForecast = (forecast, lang) => {
  const mappedForecast = [];
  for (let i = 0; i < 5; i += 1) {
    mappedForecast.push({
      date: formatDate(forecast[i].dt, lang),
      description: forecast[i].weather[0]
        ? forecast[i].weather[0].description
        : null,
      icon: forecast[i].weather[0] && getIcon(forecast[i].weather[0].icon),
      temperature: {
        min: forecast[i].temp.min.toFixed(0),
        max: forecast[i].temp.max.toFixed(0),
      },
      wind: forecast[i].wind_speed.toFixed(0),
      humidity: forecast[i].humidity,
    });
  }
  return mappedForecast;
};

export const mapData = (forecastData, todayData, lang) => {
  const mapped = {};
  if (forecastData && todayData) {
    const daysData = forecastData;
    mapped.current = mapCurrent(todayData, lang);
    mapped.forecast = mapForecast(daysData);
  }
  return mapped;
};

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const initialState = {
  data: null,
  isLoading: true,
  errorMessage: null,
};

export const fetchReducer = (state, { type, payload }) => {
  switch (type) {
    case SUCCESS:
      return {
        data: payload,
        isLoading: false,
        errorMessage: null,
      };
    case FAILURE:
      return { data: null, isLoading: false, errorMessage: payload };
    default:
      return state;
  }
};

const useOpenWeather = (options) => {
  const endpoint = '//api.openweathermap.org/data/2.5/onecall';
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { data, isLoading, errorMessage } = state;
  const { unit, lang, key, lon, lat } = options;
  const params = {
    appid: key,
    lang,
    units: unit,
    lat,
    lon,
  };

  const fetchData = async () => {
    try {
      const forecastResponse = await axios.get(endpoint, { params });
      const payload = mapData(
        forecastResponse.data.daily,
        forecastResponse.data.current,
        lang,
      );

      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (error) {
      console.error(error.message);
      dispatch({ type: FAILURE, payload: error.message || error });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, errorMessage, fetchData };
};

export default useOpenWeather;
