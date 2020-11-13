import axios from "axios";
import utils from "./utils";

export default class OpenWeatherApi {
  constructor(unit, apiKey, lang) {
    this.unit = unit;
    this.apiKey = apiKey;
    this.baseApiUrl = "//api.openweathermap.org/data/2.5";
    this.lang = lang;
  }
  getForecast(args) {
    const endpointForecast = this.baseApiUrl + "/forecast";
    const endPointToday = `${this.baseApiUrl}/weather`;
    const params = Object.assign(
      {
        appid: this.apiKey,
        lang: this.lang,
        units: this.unit,
      },
      args
    );

    const promise = axios
      .all([
        axios.get(endpointForecast, { params }),
        axios.get(endPointToday, { params }),
      ])
      .then(
        axios.spread((forecastReponse, todayReponse) => {
          const forecastData = forecastReponse.data;
          const todayData = todayReponse.data;
          if (forecastData && todayData) {
            return this._map(forecastData, todayData, params.lang);
          }
          return {};
        })
      );
    return promise;
  }
  _map(forecastData, todayData, lang) {
    const mapped = {};

    mapped.location = forecastData.city;
    mapped.current = {
      description: todayData.weather[0].description,
      icon: todayData.weather[0].icon,
      temperature: {
        min: todayData.main.temp_min.toFixed(0),
        max: todayData.main.temp_max.toFixed(0),
        current: todayData.main.temp.toFixed(0),
      },
      wind: todayData.wind.speed.toFixed(0),
      humidity: todayData.main.humidity,
      date: utils.formatDate(todayData.dt, lang),
    };
    mapped.days = this._mapForecast(forecastData.list, lang);

    return mapped;
  }
  _mapForecast(daysData, lang) {
    var comingDays = utils.getNextDays(new Date());
    var daysMapped = [];

    // Getting data from each day
    for (var i = 0; i < 4; i++) {
      var dayDataFiltered = daysData.filter((item) =>
        item.dt_txt.includes(comingDays[i])
      ); //7 or 8 data objects represnting a day
      var dayMapped = {};

      dayMapped.date = utils.formatDate(dayDataFiltered[0].dt, lang); // Getting the date from the 1st data object (random)

      dayMapped.temperature = {};
      dayMapped.temperature.min = Math.min
        .apply(
          Math,
          dayDataFiltered.map(function (el) {
            return el.main.temp_min;
          })
        )
        .toFixed(0);
      dayMapped.temperature.max = Math.max
        .apply(
          Math,
          dayDataFiltered.map(function (el) {
            return el.main.temp_max;
          })
        )
        .toFixed(0);

      // Taking the middle of the day as reference
      dayMapped.description =
        dayDataFiltered[dayDataFiltered.length / 2].weather[0].description;
      dayMapped.icon =
        dayDataFiltered[dayDataFiltered.length / 2].weather[0].icon;

      daysMapped.push(dayMapped);
    }

    return daysMapped;
  }
}
