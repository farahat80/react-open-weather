import { useEffect, useReducer, useState } from 'react';
import dayjs from 'dayjs';
import utc  from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import axios from 'axios';
import { getIcon } from './iconsMap';

dayjs.extend(utc)
dayjs.extend(timezone)

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
  return {
    date: formatDate(day.datetimeEpoch, lang),
    description: day ? day.description : null,
    icon: current && getIcon(current.icon),
    temperature: {
      current: current.temp.toFixed(0),
      min: day.tempmin.toFixed(0), 
      max: day.tempmax.toFixed(0),
    },
    wind: current.windspeed.toFixed(0),
    humidity: current.humidity,
  };
};

export const mapForecast = (days, lang) => {
  const mappedForecast = [];
  
  for (let i = 0; i < 5; i += 1) {
    mappedForecast.push({
      date: formatDate(days[i].datetimeEpoch, lang),
      description: days[i].description,
      icon: getIcon(days[i].icon),
      temperature: {
        min: days[i].tempmin.toFixed(0),
        max: days[i].tempmax.toFixed(0),
      },
      wind: days[i].windspeed.toFixed(0),
      humidity: days[i].humidity,
    });
  }
  return mappedForecast;
};

export const mapData = (weatherData, lang) => {
  const mapped = {};
  if (weatherData) {
    const tz=weatherData.timezone;
    const days = weatherData.days;
    const current =weatherData.currentConditions;
    const today=days && days[0]; //assuming forecast response
    mapped.current = mapCurrent(today, current, lang, tz);
    mapped.forecast = mapForecast(days, lang, tz);
  }
  return mapped;
};

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

const useVisualCrossing = (options) => {
 
  
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { data, errorMessage } = state;
  const [isLoading, setIsLoading] = useState(false);
  const { unit, lang, key, lon, lat } = options;
  //end point supports addresses too but stay with lat,lon
  const endpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}`;
  const params = {
    key: key,
    lang,
    unitGroup: unit, //metric, us
    iconSet: "icons2", //use updated icons
    include:"days,current", //reduce response data to data we need
    elements:"datetimeEpoch,tempmax,tempmin,temp,humidity,windspeed,icon,description", //reduce response data size to data we need
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

export default useVisualCrossing;
