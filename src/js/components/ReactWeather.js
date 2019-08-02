import React from 'react';
import PropTypes from 'prop-types';
import createStyle from 'react-jss';
import Today from './Today';
import Forecast from './Forecast';
import WeatherIcon from './WeatherIcon';

const ReactWeather = ({
  showForecast,
  lang,
  classes,
  today,
  forecast,
  units,
  location,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.left}>
          <h2 className={classes.header}>{location.name}</h2>
          <Today
            todayData={today}
            temperatureUnit={units.temperature}
            windSpeedUnit={units.windSpeed}
            lang={lang}
          />
        </div>
        <div className={classes.right}>
          <WeatherIcon
            iconCode={today.icon}
            size={120}
            color="white"
            title={today.description}
          />
        </div>
      </div>
      {showForecast && (
        <Forecast
          temperatureUnit={units.temperature}
          showForecast={showForecast}
          daysData={forecast}
          lang={lang}
        />
      )}
    </div>
  );
};

ReactWeather.propTypes = {
  classes: PropTypes.object.isRequired,
  showForecast: PropTypes.bool,
  isLoading: PropTypes.bool,
  lang: PropTypes.string,
};

ReactWeather.defaultProps = {
  showForecast: true,
  lang: 'en',
  isLoading: true,
};

const style = createStyle({
  container: {
    fontFamily: 'Helvetica, sans-serif',
    fontSize: 13,
  },
  main: {
    color: '#fff',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom right, #0181C2, #04A7F9, #4BC4F7)',
    display: 'flex',
    borderRadius: ({ forecast }) => (forecast ? [[5, 5, 0, 0]] : 5),
  },
  header: {
    margin: [0, 0, 10, 0],
    fontWeight: '300',
    fontSize: 'x-large',
    letterSpacing: 2,
  },
  left: {
    padding: 25,
    width: '60%',
  },
  right: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style(ReactWeather);
