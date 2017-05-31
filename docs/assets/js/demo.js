var ReactWeather = window.ReactWeather.default;
var API_KEY = "7ad07aac9b0943040a4abdd2c23dfc4e"
var rwTodayEl = React.createElement(ReactWeather, {
  apikey: API_KEY,
  type: "city",
  city: "Munich",
  unit: "metric"
});
var rwForecastEl = React.createElement(ReactWeather, {
  apikey: API_KEY,
  type: "city",
  city: "Munich",
  forecast:"5days",
  unit: "metric"
});
ReactDOM.render(rwTodayEl, document.getElementById('comp-today'));
ReactDOM.render(rwForecastEl, document.getElementById('comp-forecast'));