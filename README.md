# React Open Weather
-------------
React open weather is a React Component loading forecast data from [Open Weather Map](https://openweathermap.org/).

Features Implemented:

 1. Showing Today Weather
 2. Showing 5 days Weather Forecast

The Component development is in progress and will contain more features in the future versions.

### Installation
-------------
First you will need to register and account on open weather map website and obtain an [API key](http://openweathermap.org/appid)

Next, in your project directory run:
```sh
    $ npm install react-open-weather
```
you will need to add link to weather icons css file in your html file or require it in your build process
[Weather Icons](https://erikflowers.github.io/weather-icons/), or you can directly use the CDN.

```html
    <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css" 
          type="text/css"/>
```


### Usage
-------------

### 1-Loading today weather data by city name
```html
  <ReactWeather
    apikey="7ad07aac9b0943040a4abdd2c23dfc4e"
    type="city"
    city="Munich"/>
```

----------

TBC.