import { useEffect, useReducer } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { getIcon } from './iconsMap';

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const initialState = {
  data: null,
  isLoading: false,
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

export const formatDate = (dte) => {
  if (dte && dayjs().isValid(dte)) {
    return dayjs(dte).format('ddd D MMMM');
  }
  return '';
};

export const mapCurrent = (day, currentTemp, lang) => {
  return {
    date: formatDate(day.datetime, lang),
    description: day.weather ? day.weather.description : null,
    icon: day.weather && getIcon(day.weather.code),
    temperature: {
      current: currentTemp.toFixed(0),
      min: day.min_temp.toFixed(0),
      max: day.max_temp.toFixed(0),
    },
    wind: day.wind_spd.toFixed(0),
    humidity: day.rh,
  };
};

export const mapForecast = (forecast, lang) => {
  const mappedForecast = [];
  for (let i = 0; i < 5; i += 1) {
    mappedForecast.push({
      date: formatDate(forecast[i].datetime, lang),
      description: forecast[i].weather ? forecast[i].weather.description : null,
      icon: forecast[i].weather && getIcon(forecast[i].weather.code),
      temperature: {
        min: forecast[i].min_temp.toFixed(0),
        max: forecast[i].max_temp.toFixed(0),
      },
      wind: forecast[i].wind_spd.toFixed(0),
      humidity: forecast[i].rh,
    });
  }
  return mappedForecast;
};

export const mapData = (daysData, current, lang) => {
  const mapped = {};
  if (daysData && current) {
    const currentTemp = current.temp;
    mapped.location = current.city_name;
    mapped.forecast = mapForecast(daysData, lang);
    mapped.current = mapCurrent(daysData[0], currentTemp, lang);
  }
  return mapped;
};

const useWeatherBit = (options) => {
  const baseApiUrl = 'https://api.weatherbit.io/v2.0';
  const endpointForecast = `${baseApiUrl}/forecast/daily`;
  const endPointToday = `${baseApiUrl}/current`;
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { data, isLoading, errorMessage } = state;
  const { unit, lang, key, lon, lat } = options;
  const params = {
    key,
    days: 5,
    lang,
    units: unit,
    lon,
    lat,
  };

  const fetchData = async () => {
    try {
      const [forecastResponse, todayResponse] = await axios.all([
        axios.get(endpointForecast, { params }),
        axios.get(endPointToday, { params }),
      ]);
      const payload = mapData(
        forecastResponse.data.data,
        todayResponse.data.data[0],
        lang,
      );
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

export default useWeatherBit;
