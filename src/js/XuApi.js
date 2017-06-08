import axios from 'axios';
import utils from './utils'

const FIELDS = {
  metric: {
    temperature: {
      current: 'temp_c',
      min: 'mintemp_c',
      max: 'maxtemp_c'
    },
    wind: 'maxwind_kph'
  },
  imperial: {
    temperature: {
      current: 'temp_f',
      min: 'mintemp_f',
      max: 'maxtemp_f'
    },
    wind: 'maxwind_mph'
  }
}

export default class XuApi {
  constructor(unit, apiKey) {
    this.unit = unit;
    this.apiKey = apiKey;
    this.baseApiUrl = '//api.apixu.com/v1/forecast.json';
  }
  getForecast(args) {
    const self = this;
    const endpoint = self.baseApiUrl;
    const params = Object.assign({
      key: self.apiKey,
      days: 5
    }, args);
    const promise = axios.get(endpoint, {
      params
    }).then((response) => {
      const data = response.data;
      if (data) {
        return self._map(data);
      }
      return {};
    });
    return promise;
  }
  _map(data) {
    let self = this;
    let daysData = data.forecast.forecastday;
    let mapped = {}
    mapped.location = data.location;
    mapped.days = daysData.map((item) => {
      return {
        date: utils.formatDate(item.date),
        description: item.day.condition.text,
        icon: item.day.condition.code,
        temperature: {
          min: item.day[FIELDS[self.unit].temperature.min].toFixed(0),
          max: item.day[FIELDS[self.unit].temperature.max].toFixed(0)
        },
        wind: item.day[FIELDS[self.unit].wind].toFixed(0),
        humidity: item.day.avghumidity
      }
    });
    if (mapped.days.length > 0) {
      mapped.days[0].temperature.current = data.current[FIELDS[self.unit].temperature.current];
    }
    return mapped;
  }
}