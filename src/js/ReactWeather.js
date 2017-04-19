import React from 'react';
import style from '../css/react-weather.scss';
import OWApi from './OWApi';
import utils from './utils';
import WeatherIcon from './WeatherIcon';

class ReactWeather extends React.Component {
  constructor(props) {
    super(props);
    this.api = new OWApi(props.unit, props.apikey);
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
      <div className="row">
        <div className="col-lg-12">
          <h2>{data.city.name}</h2>
          <p>{data.weather.description}</p>
          <div>Current: <b>{data.temprature.current} {symbol}</b></div>
          <div>Min: <b>{data.temprature.min} {symbol}</b></div>
          <div>Max: <b>{data.temprature.max} {symbol}</b></div>
          <div>Wind Speed: <b>{data.wind.speed}</b></div>
          <div>Humidity: <b>{data.humidity}</b></div>
          <div><WeatherIcon icon={data.weather.icon}/></div>
        </div>
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