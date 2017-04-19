(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("jquery")) : factory(root["React"], root["$"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactWeather = __webpack_require__(2);

	var _reactWeather2 = _interopRequireDefault(_reactWeather);

	var _OWApi = __webpack_require__(3);

	var _OWApi2 = _interopRequireDefault(_OWApi);

	var _utils = __webpack_require__(5);

	var _utils2 = _interopRequireDefault(_utils);

	var _WeatherIcon = __webpack_require__(6);

	var _WeatherIcon2 = _interopRequireDefault(_WeatherIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactWeather = function (_React$Component) {
	  _inherits(ReactWeather, _React$Component);

	  function ReactWeather(props) {
	    _classCallCheck(this, ReactWeather);

	    var _this = _possibleConstructorReturn(this, (ReactWeather.__proto__ || Object.getPrototypeOf(ReactWeather)).call(this, props));

	    _this.api = new _OWApi2.default(props.unit, props.apikey);
	    _this.state = {
	      data: {
	        city: {},
	        temprature: {},
	        weather: {},
	        wind: {}
	      }
	    };
	    return _this;
	  }

	  _createClass(ReactWeather, [{
	    key: 'render',
	    value: function render() {
	      var data = this.state.data;
	      var symbol = _utils2.default.getTempSymbol(this.props.unit);
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-lg-12' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            data.city.name
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            data.weather.description
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Current: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              data.temprature.current,
	              ' ',
	              symbol
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Min: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              data.temprature.min,
	              ' ',
	              symbol
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Max: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              data.temprature.max,
	              ' ',
	              symbol
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Wind Speed: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              data.wind.speed
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Humidity: ',
	            _react2.default.createElement(
	              'b',
	              null,
	              data.humidity
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_WeatherIcon2.default, { icon: data.weather.icon })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.getWeatherData();
	    }
	  }, {
	    key: 'getWeatherData',
	    value: function getWeatherData() {
	      var self = this;
	      var params = self._getParams();
	      self.api.getWeatherData(params).done(function (data) {
	        self.setState({
	          data: data
	        });
	      }).fail(function () {
	        console.warn('failed');
	      });
	    }
	  }, {
	    key: '_getParams',
	    value: function _getParams() {
	      var _props = this.props,
	          type = _props.type,
	          lon = _props.lon,
	          lat = _props.lat,
	          city = _props.city,
	          cityId = _props.cityId,
	          country = _props.country;

	      switch (type) {
	        case "geo":
	          return { "lon": lon, "lat": lat };
	        case "city":
	          return { "q": city };
	      }
	    }
	  }], [{
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        unit: "metric",
	        type: "geo"
	      };
	    }
	  }, {
	    key: 'propTypes',
	    get: function get() {
	      return {
	        unit: _react2.default.PropTypes.string,
	        type: _react2.default.PropTypes.string,
	        lat: _react2.default.PropTypes.string,
	        lon: _react2.default.PropTypes.string,
	        city: _react2.default.PropTypes.string,
	        apikey: _react2.default.PropTypes.string.isRequired
	      };
	    }
	  }]);

	  return ReactWeather;
	}(_react2.default.Component);

	var _default = ReactWeather;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ReactWeather, 'ReactWeather', '/home/dodo/Work/react-weather/src/js/ReactWeather.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dodo/Work/react-weather/src/js/ReactWeather.js');
	}();

	;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(4);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	window.$ = _jquery2.default;
	window.jQuery = _jquery2.default;

	var OWApi = function () {
	  function OWApi(unit, apiKey) {
	    _classCallCheck(this, OWApi);

	    this.unit = unit;
	    this.baseApiUrl = 'http://api.openweathermap.org/data/2.5/';
	    this.apiKey = apiKey;
	  }

	  _createClass(OWApi, [{
	    key: 'getWeatherData',
	    value: function getWeatherData(args) {
	      var endpoint = this.baseApiUrl + "weather";
	      var params = Object.assign({
	        units: this.unit,
	        APPID: this.apiKey
	      }, args);

	      return _jquery2.default.getJSON(endpoint, params).then(function (data) {
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
	          };
	        }
	      });
	    }
	  }]);

	  return OWApi;
	}();

	var _default = OWApi;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(OWApi, 'OWApi', '/home/dodo/Work/react-weather/src/js/OWApi.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dodo/Work/react-weather/src/js/OWApi.js');
	}();

	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  icons: {
	    "01d": "wi-day-sunny",
	    "01n": "wi-night-clear",
	    "02d": "wi-day-cloudy",
	    "02n": "wi-night-alt-cloudy",
	    "03d": "wi-cloudy",
	    "03n": "wi-cloudy",
	    "04d": "wi-cloudy",
	    "04n": "wi-cloudy",
	    "09d": "wi-day-showers",
	    "09n": "wi-night-alt-showers",
	    "10d": "wi-day-rain",
	    "10n": "wi-night-alt-rain-wind",
	    "11d": "wi-day-thunderstorm",
	    "11n": "wi-night-alt-thunderstorm",
	    "13d": "wi-day-snow-wind",
	    "13n": "wi-night-alt-snow",
	    "50d": "wi-day-fog",
	    "50n": "wi-night-fog"
	  },
	  getIcon: function getIcon(icon) {
	    var icoClass = this.icons[icon];
	    if (icoClass) {
	      return icoClass;
	    } else {
	      return "na";
	    }
	  },
	  getTempSymbol: function getTempSymbol(unit) {
	    if (unit == "metric") {
	      return "C";
	    } else {
	      return "F";
	    }
	  }
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(7);

	var _utils = __webpack_require__(5);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WeatherIcon = function WeatherIcon(_ref) {
	  var icon = _ref.icon;

	  var iconCls = _utils2.default.getIcon(icon);
	  return _react2.default.createElement('i', { className: 'wicon wi ' + iconCls });
	};

	var _default = WeatherIcon;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(WeatherIcon, 'WeatherIcon', '/home/dodo/Work/react-weather/src/js/WeatherIcon.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/dodo/Work/react-weather/src/js/WeatherIcon.js');
	}();

	;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;