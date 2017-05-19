import React, {PropTypes} from 'react';

const propTypes = {
  name: PropTypes.string.isRequired
}

const WeatherIcon = (props) => (
  <i className={`wicon wi ${props.name}`}></i>
)

WeatherIcon.propTypes = propTypes;

export default WeatherIcon;