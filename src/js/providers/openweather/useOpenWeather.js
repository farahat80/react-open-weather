import { useEffect, useReducer } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { getIcon } from './iconsMap';

export const formatDate = (dte, lang) => {
  if (dte && dayjs().isValid(dte)) {
    return dayjs.unix(dte).format('ddd D MMMM');
  }
  return '';
};

export const mapCurrent = (day, lang) => {
  return {
    date: formatDate(day.dt, lang),
    description: day.weather[0] ? day.weather[0].main : null,
    icon: day.weather[0] && getIcon(day.weather[0].icon),
    temperature: {
      current: day.main.temp.toFixed(0),
      min: day.main.temp_min.toFixed(0),
      max: day.main.temp_max.toFixed(0),
    },
    wind: day.wind.speed.toFixed(0),
    humidity: day.main.humidity,
  };
};

export const mapForecast = (forecast, lang) => {
  const mappedForecast = [];
  for (let i = 0; i < 5; i += 1) {
    mappedForecast.push({
      date: formatDate(forecast[i].dt, lang),
      description: forecast[i].weather[0] ? forecast[i].weather[0].main : null,
      icon: forecast[i].weather[0] && getIcon(forecast[i].weather[0].icon),
      temperature: {
        min: forecast[i].temp.min.toFixed(0),
        max: forecast[i].temp.max.toFixed(0),
      },
      wind: forecast[i].speed.toFixed(0),
      humidity: forecast[i].humidity,
    });
  }
  return mappedForecast;
};

export const mapData = (forecastData, todayData, lang) => {
  const mapped = {};
  if (forecastData && todayData) {
    const daysData = forecastData.list;
    mapped.location = todayData.name;
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

export const getLocationParams = options => {
  const { type, lon, lat, city, lang } = options;
  if (type === 'geo') {
    return {
      lat,
      lon,
      lang,
    };
  }
  return { q: city, lang };
};

const useOpenWeather = options => {
  const baseApiUrl = '//api.openweathermap.org/data/2.5';
  const endpointForecast = `${baseApiUrl}/forecast/daily`;
  const endPointToday = `${baseApiUrl}/weather`;
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { data, isLoading, errorMessage } = state;
  const { unit, lang, key } = options;
  const baseParams = {
    appid: key,
    cnt: 5,
    lang,
    units: unit,
  };
  const args = getLocationParams(options);
  const params = Object.assign(baseParams, args);

  const fetchData = async () => {
    try {
      const [forecastResponse, todayResponse] = await axios.all([
        axios.get(endpointForecast, { params }),
        axios.get(endPointToday, { params }),
      ]);
      const payload = mapData(forecastResponse.data, todayResponse.data, lang);
      dispatch({
        type: SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error.message || error });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, errorMessage, fetchData };
};

export default useOpenWeather;
