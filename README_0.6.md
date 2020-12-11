# React Open Weather

---

React open weather is a React Component loading forecast data from [OpenWeather API](https://openweathermap.org).

Features Implemented:

1.  Showing Today Weather
2.  Showing 5 days Weather Forecast

The Component development is in progress and will contain more features in the future versions.

### Demo & Docs

- [Demo](https://react-open-weather.gitbook.io/project/)
- [Docs](https://react-open-weather.gitbook.io/project/)

### Dependencies

- [Moment JS](https://momentjs.com/)
- React

### Installation

---

First you will need to register and account on OpenWeather website and obtain an [API key](https://openweathermap.org/price)

Next, in your project directory run:

```sh
    $ npm install react-open-weather
```

you will need to add link to weather icons css file in your html file or require it in your build process
[Weather Icons](https://erikflowers.github.io/weather-icons/), or you can directly use the CDN.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
  type="text/css"
/>
```

Then in your code file you can import the component

#### Using ES2015 import

```js
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
```

#### Using CommonJS

```js
var ReactWeather = require('react-open-weather').default;
//Optional include of the default css styles
require('react-open-weather/lib/css/ReactWeather.css');
```

#### UMD build is available with script tag

```html
<script src="node_modules/react-open-weather/lib/js/ReactWeather.js"></script>
```

### Usage

---

### 1-Loading today weather data by city name

```html
<ReactWeather
  forecast="today"
  apikey="YOUR_API_KEY"
  type="city"
  city="Munich"
/>
```

---

### 2-Loading today data by longitude and latitude

```html
<ReactWeather
  forecast="today"
  apikey="YOUR_API_KEY"
  type="geo"
  lat="48.1351"
  lon="11.5820"
/>
```

### 3-Loading today data based on the current IP address (default)

```html
<ReactWeather forecast="today" apikey="YOUR_API_KEY" type="auto" />
```

### 3-Loading 5 days forecast

```html
<ReactWeather
  forecast="5days"
  apikey="YOUR_API_KEY"
  type="city"
  city="Munich"
/>
```

### 4-Changing the the units to imperial system

```html
<ReactWeather
  forecast="today"
  unit="imperial"
  apikey="YOUR_API_KEY"
  type="city"
  city="Munich"
/>
```

### 5-Changing the language

```html
<ReactWeather
  forecast="today"
  unit="imperial"
  apikey="YOUR_API_KEY"
  type="city"
  city="Munich"
  lang="es"
/>
```

## Props Options

| Props        | Options               | Default | Description                                                                                                                                                                                                 |
| ------------ | --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type**     | 'city', 'geo'         | city    | Determine the data should be loaded by city name or longitude and latitude                                                                                                                                  |
| **city**     |                       |         | Name of the city to show forecast for, must be provided if the type='city'                                                                                                                                  |
| **lon**      |                       |         | Longitude value, must be provided if the type='geo'                                                                                                                                                         |
| **lat**      |                       |         | latitude value, must be provided if the type='geo'                                                                                                                                                          |
| **forecast** | 'today', '5days'      | today   | Determine what forecast to show, today or today plus 4 days ahead                                                                                                                                           |
| **apikey**   |                       |         | Your API key for open weather map API                                                                                                                                                                       |
| **unit**     | 'imperial', 'meteric' | meteric | The unit system you want to use, for Meteric the temperature will be shown in Celsius and distances will be in kilometers, for Imperial the temperature will be shown in Fahrenheit and distances in miles. |
| **lang**     | lang codes            | en      | Returns 'condition:text' field in API in the desired language, Please pass 'lang code' from below table. e.g.: lang=es                                                                                      |

## Translate Wind and Humidity

In lang.js you can implement the necessary translation, to correctly translate Wind and Humidity into other languages, if you want to implement another language, this is where you can do it. Remember to make a Pull request to share it with everyone

```Javascript
    langText: {
          en: { Wind: 'Wind', Humidity: 'Humidity',},
          es: { Wind: 'Viento', Humidity: 'Humedad',}
        }
```

## Language and lang codes from OpenWeather

| Language            | lang code |
| ------------------- | --------- |
| Arabic              | ar        |
| Bengali             | bn        |
| Bulgarian           | bg        |
| Chinese Simplified  | zh        |
| Chinese Traditional | zh_tw     |
| Czech               | cs        |
| Danish              | da        |
| Dutch               | nl        |
| Finnish             | fi        |
| French              | fr        |
| German              | de        |
| Greek               | el        |
| Hindi               | hi        |
| Hungarian           | hu        |
| Italian             | it        |
| Japanese            | ja        |
| Javanese            | jv        |
| Korean              | ko        |
| Mandarin            | zh_cmn    |
| Marathi             | mr        |
| Polish              | pl        |
| Portuguese          | pt        |
| Punjabi             | pa        |
| Romanian            | ro        |
| Russian             | ru        |
| Serbian             | sr        |
| Sinhalese           | si        |
| Slovak              | sk        |
| Spanish             | es        |
| Swedish             | sv        |
| Tamil               | ta        |
| Telugu              | te        |
| Turkish             | tr        |
| Ukrainian           | uk        |
| Urdu                | ur        |
| Vietnamese          | vi        |
| Wu (Shanghainese)   | zh_wuu    |
| Xiang               | zh_hsn    |
| Yue (Cantonese)     | zh_yue    |
| Zulu                | zu        |

## Contribution

If you want to contribute to the project and make it better, your help is very welcome, create a pull request with your suggested feature/bug fix/ enhancements.
