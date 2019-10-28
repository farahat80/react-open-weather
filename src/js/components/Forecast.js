import React from 'react';
import PropTypes from 'prop-types';
import createStyle from 'react-jss';
import WeatherIcon from './WeatherIcon';

const Forecast = ({ unitsLabels, forecast, classes }) => {
  return (
    <div className={classes.daysPanel}>
      {forecast.map((day, i) => {
        if (i > 0) {
          return (
            <div key={day.date} className={classes.day}>
              <div className={classes.date}>{day.date}</div>
              <div className={classes.icon}>
                <WeatherIcon path={day.icon} title={day.description} />
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

const style = createStyle({
  daysPanel: {
    clear: 'both',
    display: 'flex',
    borderLeft: 'solid 1px #ddd',
    borderRight: 'solid 1px #ddd',
    borderBottom: 'solid 1px #ddd',
    borderRadius: [0, 0, 5, 5],
    fontSize: 11,
    color: '#777',
    backgroundColor: '#fff',
  },
  day: {
    width: '25%',
    textAlign: 'center',
    margin: 10,
    '&:not(:first-child)': {
      borderLeft: 'solid 1px #ddd',
    },
  },
  date: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  desc: {
    margin: [10, 0, 10, 0],
    fontSize: 12,
  },
  range: {
    fontSize: 11,
  },
  icon: {
    paddingTop: 10,
  },
});

Forecast.propTypes = {
  classes: PropTypes.object.isRequired,
  unitsLabels: PropTypes.object.isRequired,
  forecast: PropTypes.array.isRequired,
};

export default style(Forecast);
