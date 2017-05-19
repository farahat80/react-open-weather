import React from 'react';
import style from '../css/react-weather.scss';
import owApi from './owApi';
import utils from './utils';

class ReactWeather extends React.Component {
  constructor(props) {
    super(props);
    this.api = new owApi(props.unit, props.apikey);
    this.state = {
      data: null
    }
  }
  static get defaultProps() {
    return {
      unit: "metric",
      type: "geo",
      forecast: "today"
    }
  }
  static get propTypes() {
    return {
      unit: React.PropTypes.oneOf(['metric', 'imperial']),
      type: React.PropTypes.oneOf(['geo', 'city']),
      lat: React.PropTypes.string,
      lon: React.PropTypes.string,
      city: React.PropTypes.string,
      forecast: React.PropTypes.oneOf(['today', '5days']),
      apikey: React.PropTypes.string.isRequired
    }
  }
  render() {
    const data = this.state.data;
    const units = utils.getUnits(this.props.unit);
    if(data){
      const days = data.days;
      const today = days[0];
      const todayIcon = utils.getIcon(today.weather.icon);
      return (
        <div className="rw-box">
          <div className={`rw-main type-${this.props.forecast}`}>
            <div className="rw-box-left">
              <h2>{data.city.name}</h2>
              <div className="rw-today">
                <div className="date">{today.date}</div>
                <div className="hr"></div>
                <div className="current">{today.temprature.current} {units.temp}</div>
                <div className="desc"><i className={`wicon wi ${todayIcon}`}></i> {utils.toTitleCase(today.weather.description)}</div>
                <div className="hr"></div>
                <div className="info">
                  <div>Wind Speed: <b>{today.wind.speed}</b> {units.speed}</div>
                  <div>Humidity: <b>{today.humidity}</b> %</div>
                </div>
              </div>
            </div>
            <div className="rw-box-right">
              <i className={`wicon wi ${todayIcon}`}></i>
            </div>
          </div>
          <div className="rw-box-days">
              {
                this.renderForecastDays()
              }
          </div>
        </div>
      );
    }
    else{
      return(<div>Loading...</div>)
    }
  }
  componentDidMount() {
    this.getWeatherData();
  }
  renderForecastDays() {
    if (this.props.forecast == "5days") {
      const { forecast, unit } = this.props;
      const units = utils.getUnits(unit);
      let days = this.state.data.days;
      return (
        days.map(function (day, i) {
          if (i > 0) {
            const iconCls = utils.getIcon(day.weather.icon);
            return (
              <div key={`day-${i}`} className='rw-day'>
                <div className="rw-date">{day.date}</div>
                <i className={`wicon wi ${iconCls}`}></i>
                <div className="rw-current">{day.temprature.current} {units.temp}</div>
                <div className="rw-range">{day.temprature.min} {units.temp} / {day.temprature.max} {units.temp} </div>
              </div>
            )
          }  
        })
      )
    }  
  }
  getWeatherData() {
    var self = this;
    var forecast = self.props.forecast;
    var params = self._getParams();
    var promise = null;
    if(forecast==="today"){
      promise = self.api.getWeatherData(params);
    }else if(forecast==="5days"){
      params.cnt=5;
      promise = self.api.getForecastData(params);
    }
    promise.then(function (data) {
      
      self.setState({
        data: data
      });
    })
  }
  _getParams() {
    const { type, lon, lat, city} = this.props;
    switch(type){
      case "geo": 
        return { "lon": lon, "lat": lat }   
      case "city":
        return { "q" : city }  
    }
  }
}

export default ReactWeather;