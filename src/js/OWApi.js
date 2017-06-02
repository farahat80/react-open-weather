import axios from 'axios';
import utils from './utils';

export default class OWApi {
  constructor(unit, apiKey) {
    this.unit = unit;
    this.baseApiUrl = '//api.openweathermap.org/data/2.5/';
    this.apiKey = apiKey;
  }
  getWeatherData(args) {
    const self = this;
    const endpoint = `${self.baseApiUrl}weather`;
    const params = Object.assign({
      units: self.unit,
      APPID: self.apiKey
    }, args);
    const promise = self.fetchData(params).then((response) => {
      const data = response.data;
      if (data) {
        return self._mapWeatherData(data);
      }
      return {};
    });
    return promise;
  }
  getForecastData(args) {
    const self = this;
    const endpoint = `${self.baseApiUrl}forecast/daily`;
    const params = Object.assign({
      units: self.unit,
      APPID: self.apiKey
    }, args);
    return self.fetchData(params).then((response) => {
      const data = response.data;
      if (data) {
        return self._mapForecastData(data);
      }
      return {};
    });
  }
  fetchData(params) {
    return axios.get(endpoint, {
      params
    });
  }
  _mapWeatherData(data) {
    let mapped = {};
    mapped = {
      city: {
        name: data.name,
        id: data.id,
        lng: data.coord.lon,
        lat: data.coord.lat
      },
      days: []
    };
    mapped.days.push({
      date: utils.formatDate(data.dt),
      temprature: utils.getTemperatureObject(data.main.temp, data.main.temp_min, data.main.temp_max),
      weather: utils.getWeatherObject(data.weather[0]),
      wind: {
        speed: data.wind.speed,
        degree: data.wind.deg
      },
      pressure: data.main.pressure,
      humidity: data.main.humidity
    });
    return mapped;
  }
  _mapForecastData(data) {
    let mapped = {};
    mapped = {
      city: {
        name: data.city.name,
        id: data.city.id,
        lng: data.city.coord.lon,
        lat: data.city.coord.lat
      },
      days: []
    };
    data.list.forEach((day) => {
      mapped.days.push({
        date: utils.formatDate(day.dt),
        temprature: utils.getTemperatureObject(day.temp.day, day.temp.min, day.temp.max),
        weather: utils.getWeatherObject(day.weather[0]),
        wind: {
          speed: Math.round(day.speed),
          degree: null
        },
        pressure: day.pressure,
        humidity: day.humidity
      });
    });
    return mapped;
  }
}
