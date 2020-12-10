import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  svg: {
    fill: ({ color }) => color,
  },
});

// eslint-disable-next-line no-unused-vars
const WeatherIcon = ({ title, path, size, viewBox, color }) => {
  const classes = useStyles({ color });
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
  viewBox: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

WeatherIcon.defaultProps = {
  color: '#4BC4F7',
  size: 40,
  viewBox: '0 0 35 40',
};

export default WeatherIcon;
