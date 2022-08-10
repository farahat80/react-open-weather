import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledSVG = styled.svg`
  fill: ${({ color }) => color};
`;

// eslint-disable-next-line no-unused-vars
const WeatherIcon = ({ title, path, size, viewBox, color }) => {
  return (
    <StyledSVG
      color={color}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <title>{title}</title>
      <path d={path} />
    </StyledSVG>
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
  viewBox: '0 -5 35 40',
};

export default WeatherIcon;
