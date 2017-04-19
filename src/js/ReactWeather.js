import React from 'react';
import style from '../css/react-weather.scss';
import owApi from './owApi';
import utils from './utils';
import WeatherIcon from './WeatherIcon';

class ReactWeather extends React.Component {
  constructor(props) {
    super(props);
    this.api = new owApi(props.unit, props.apikey);
    this.state = {
      data: {
        city: {},
        temprature: {},
        weather: {},
        wind:{}
      }
    }
  }
  static get defaultProps() {
    return {
      unit: "metric",
      type: "geo"
    }
  }
  static get propTypes() {
    return {
      unit: React.PropTypes.string,
      type: React.PropTypes.string,
      lat: React.PropTypes.string,
      lon: React.PropTypes.string,
      city: React.PropTypes.string,
      apikey: React.PropTypes.string.isRequired
    }
  }
  render() {
    const data = this.state.data;
    const symbol = utils.getTempSymbol(this.props.unit);
    return (
      <div className="rw-box">
        <h2>{data.city.name}</h2>
        <WeatherIcon icon={data.weather.icon}/>
        <div className="rw-desc">{data.weather.description}</div>
        <div className="rw-current">{data.temprature.current} {symbol}</div>
        <div className="rw-range">{data.temprature.min} {symbol} / {data.temprature.max} {symbol} </div>
        <div>Wind Speed: <b>{data.wind.speed}</b></div>
        <div>Humidity: <b>{data.humidity}</b></div>
      </div>
    );
  }
  componentDidMount() {
    this.getWeatherData();
  }
  getWeatherData() {
    var self = this;
    var params = self._getParams();
    self.api.getWeatherData(params).then(function (data) {
      self.setState({
        data: data
      });
    }).catch(function () {
      console.warn('failed');
    });
  }
  _getParams() {
    const { type, lon, lat, city, cityId, country } = this.props;
    switch(type){
      case "geo": 
        return { "lon": lon, "lat": lat }   
      case "city":
        return { "q" : city }  
    }
  }
}

export default ReactWeather;