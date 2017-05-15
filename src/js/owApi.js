import axios from 'axios';
import utils from './utils';

export default class OWApi {
  constructor(unit, apiKey) {
    this.unit = unit;
    this.baseApiUrl = 'http://api.openweathermap.org/data/2.5/';
    this.apiKey = apiKey
  }
  getWeatherData(args) {
    var self = this;
    var endpoint = self.baseApiUrl + "weather";
    var params = Object.assign({
      units: self.unit,
      APPID: self.apiKey
    }, args);
    var promise = axios.get(endpoint, {
      params: params
    }).then(function (response) {
      var data = response.data;
      var mapped = {};
      if (data) {
        return self._mapWeatherData(data);
      }
    });
    return promise;
  }
  getForecastData(args) {
    var self = this;
    var endpoint = self.baseApiUrl + "forecast/daily";
    var params = Object.assign({
      units: self.unit,
      APPID: self.apiKey
    }, args);
    return axios.get(endpoint, {
      params: params
    }).then(function (response) {
      var data = response.data;
      if (data) {
        return self._mapForecastData(data);
      }
    });
  }
  _mapWeatherData(data) {
    var self = this;
    var mapped = {}
    mapped = {
      city: {
        name: data.name,
        id: data.id,
        lng: data.coord.lon,
        lat: data.coord.lat
      },
      days: []
    }

    mapped.days.push({
      date: utils.formatDate(data.dt),
      temprature: self._getTemperatureObject(data.main.temp, data.main.temp_min, data.main.temp_max),
      weather: self._getWeatherObject(data.weather[0]),
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
    var self = this;
    var mapped = {}
    mapped = {
      city: {
        name: data.city.name,
        id: data.city.id,
        lng: data.city.coord.lon,
        lat: data.city.coord.lat
      },
      days: []
    }
    data.list.forEach(function (data) {
      mapped.days.push({
        date: utils.formatDate(data.dt),
        temprature: self._getTemperatureObject(data.temp.day, data.temp.min, data.temp.max),
        weather: self._getWeatherObject(data.weather[0]),
        wind: {
          speed: Math.round(data.speed),
          degree: null
        },
        pressure: data.pressure,
        humidity: data.humidity
      });
    });
    return mapped
  }
  _getWeatherObject(weather) {
    return {
      group: weather.main,
      description: weather.description,
      icon: weather.icon
    }
  }
  _getTemperatureObject(current, min, max) {
    return {
      current: Math.round(current),
      min: Math.round(min),
      max: Math.round(max)
    }
  }
}