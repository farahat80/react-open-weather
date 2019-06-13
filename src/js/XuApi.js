import axios from 'axios';
import moment from 'moment';

const formatDate = (dte, lang) => {
  if (dte && moment(dte).isValid()) {
    moment.locale(lang);
    return moment(dte).format('ddd D MMMM');
  }
  return '';
};

const getUnits = unit => {
  if (unit === 'metric') {
    return {
      temp: 'C',
      speed: 'km/h',
    };
  }
  if (unit === 'imperial') {
    return {
      temp: 'F',
      speed: 'mph',
    };
  }
  return { temp: '', speed: '' };
};

const FIELDS = {
  metric: {
    temperature: {
      current: 'temp_c',
      min: 'mintemp_c',
      max: 'maxtemp_c',
    },
    wind: 'maxwind_kph',
  },
  imperial: {
    temperature: {
      current: 'temp_f',
      min: 'mintemp_f',
      max: 'maxtemp_f',
    },
    wind: 'maxwind_mph',
  },
};

export default class XuApi {
  constructor(unit, apiKey, lang) {
    this.unit = unit;
    this.apiKey = apiKey;
    this.baseApiUrl = '//api.apixu.com/v1/forecast.json';
    this.lang = lang;
  }

  getForecast(args) {
    const endpoint = this.baseApiUrl;
    const params = Object.assign(
      {
        key: this.apiKey,
        days: 5,
        lang: this.lang,
      },
      args,
    );
    return axios
      .get(endpoint, {
        params,
      })
      .then(({ data }) => {
        if (data) {
          return this.map(data, params.lang);
        }
        return {};
      });
  }

  map(data, lang) {
    const units = getUnits(this.unit);
    const daysData = data.forecast.forecastday;
    const mapped = {};
    mapped.location = data.location;
    mapped.temperatureUnit = units.temp;
    mapped.windSpeedUnit = units.speed;
    mapped.days = daysData.map(item => ({
      date: formatDate(item.date, lang),
      description: item.day.condition.text,
      icon: item.day.condition.code,
      temperature: {
        min: item.day[FIELDS[this.unit].temperature.min].toFixed(0),
        max: item.day[FIELDS[this.unit].temperature.max].toFixed(0),
      },
      wind: item.day[FIELDS[this.unit].wind].toFixed(0),
      humidity: item.day.avghumidity,
    }));
    if (mapped.days.length > 0) {
      mapped.days[0].temperature.current = data.current[
        FIELDS[this.unit].temperature.current
      ].toFixed(0);
    }
    return mapped;
  }
}
