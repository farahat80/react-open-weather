export default class OWApi {
  constructor(unit, apiKey) {
    this.unit = unit;
    this.baseApiUrl = 'http://api.openweathermap.org/data/2.5/';
    this.apiKey = apiKey
  }
  getWeatherData(args) {
    var endpoint = this.baseApiUrl + "weather";
    var params = Object.assign(
      {
        units: this.unit,
        APPID: this.apiKey
      }
      , args
    );

    return $.getJSON(endpoint, params).then(function (data) {
      if (data) {
        return {
          city: {
            name: data.name,
            id: data.id
          },
          lng: data.coord.lon,
          lat: data.coord.lat,
          temprature: {
            current: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max
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
    });
  }

}