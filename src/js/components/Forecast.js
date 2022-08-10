import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
import { StyledDaysPanel } from './Forecast.styles';

const Forecast = ({ unitsLabels, forecast, theme }) => {
  return (
    <StyledDaysPanel className="rw-forecast-days-panel" theme={theme}>
      {forecast.map((day, i) => {
        if (i > 0) {
          return (
            <div key={day.date} className="rw-forecast-day">
              <div className="rw-forecast-date">{day.date}</div>
              <div className="rw-forecast-icon">
                <WeatherIcon
                  path={day.icon}
                  title={day.description}
                  color={theme.forecastIconColor}
                />
              </div>
              <div className="rw-forecast-desc">{day.description}</div>
              <div className="rw-forecast-range">
                {day.temperature.max} / {day.temperature.min}{' '}
                {unitsLabels.temperature}
              </div>
            </div>
          );
        }
        return '';
      })}
    </StyledDaysPanel>
  );
};

Forecast.propTypes = {
  unitsLabels: PropTypes.object.isRequired,
  forecast: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Forecast;
