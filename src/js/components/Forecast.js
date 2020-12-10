import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
import useStyles from './Forecast.styles';

const Forecast = ({ unitsLabels, forecast, theme }) => {
  const classes = useStyles({ theme });
  return (
    <div className={classes.daysPanel}>
      {forecast.map((day, i) => {
        if (i > 0) {
          return (
            <div key={day.date} className={classes.day}>
              <div className={classes.date}>{day.date}</div>
              <div className={classes.icon}>
                <WeatherIcon
                  path={day.icon}
                  title={day.description}
                  color={theme.forecastIconColor}
                />
              </div>
              <div className={classes.desc}>{day.description}</div>
              <div className={classes.range}>
                {day.temperature.max} / {day.temperature.min}{' '}
                {unitsLabels.temperature}
              </div>
            </div>
          );
        }
        return '';
      })}
    </div>
  );
};

Forecast.propTypes = {
  unitsLabels: PropTypes.object.isRequired,
  forecast: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Forecast;
