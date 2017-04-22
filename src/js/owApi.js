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
        mapped = {
          city: {
            name: data.name,
            id: data.id,
            lng: data.coord.lon,
            lat: data.coord.lat
          },
          days: []
        }
        mapped.days.push(self._mapWeatherData(data));
        return mapped;
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
      var mapped = {};
      if (data) {
        mapped = {
          city: {
            name: data.city.name,
            id: data.city.id,
            lng: data.city.coord.lon,
            lat: data.city.coord.lat
          },
          days: []
        }
        data.list.forEach(function(item){
          mapped.days.push(self._mapForecastData(item));
        });
        return mapped;
      }
    });
  }
  _mapWeatherData(data) {
    return {
      date: utils.formatDate(data.dt),
      temprature: {
        current: Math.round(data.main.temp),
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max)
      },
      weather: {
        group: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon
      },
      wind: {
        speed: data.wind.speed,
        degree: data.wind.deg
      },
      pressure: data.main.pressure,
      humidity: data.main.humidity
    }
  }
  _mapForecastData(data) {
    return {
      date: utils.formatDate(data.dt),
      temprature: {
        current: Math.round(data.temp.day),
        min: Math.round(data.temp.min),
        max: Math.round(data.temp.max)
      },
      weather: {
        group: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon
      },
      wind: {
        speed: Math.round(data.speed),
        degree: null
      },
      pressure: data.pressure,
      humidity: data.humidity
    }
  }
}