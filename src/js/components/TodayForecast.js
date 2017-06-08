import React, { PropTypes } from 'react';
import utils from '../utils';
import '../../css/components/TodayForecast.scss';

const propTypes = {
  todayData: PropTypes.object.isRequired,
  unit: PropTypes.string.isRequired
};

const TodayForecast = (props) => {
  const { todayData, unit } = props;
  const todayIcon = utils.getIcon(todayData.icon);
  const units = utils.getUnits(unit);
  return (
    <div className="rw-today">
      <div className="date">{todayData.date}</div>
      <div className="hr"></div>
      <div className="current">{todayData.temperature.current} {units.temp}</div>
      <div className="range">{todayData.temperature.max} / {todayData.temperature.min} {units.temp}</div>
      <div className="desc">
        <i className={`wicon wi ${todayIcon}`}></i>
        &nbsp;{todayData.description}
      </div>
      <div className="hr"></div>
      <div className="info">
        <div>Wind Speed: <b>{todayData.wind}</b> {units.speed}</div>
        <div>Humidity: <b>{todayData.humidity}</b> %</div>
      </div>
    </div>
  );
};

TodayForecast.propTypes = propTypes;

export default TodayForecast;
