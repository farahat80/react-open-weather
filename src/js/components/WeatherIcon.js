import React from 'react';
import createStyle from 'react-jss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const WeatherIcon = ({ title, path, classes, size, viewBox, color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      className={classes.svg}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};

WeatherIcon.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  viewBox: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

WeatherIcon.defaultProps = {
  color: '#4BC4F7',
  size: 40,
  viewBox: '0 0 35 40',
};

const style = createStyle({
  svg: {
    fill: ({ color }) => color,
  },
});

export default style(WeatherIcon);
