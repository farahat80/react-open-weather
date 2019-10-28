import React from 'react';
import PropTypes from 'prop-types';
import createStyle from 'react-jss';
import Today from './Today';
import Forecast from './Forecast';
import WeatherIcon from './WeatherIcon';

const ReactWeather = ({
  unitsLabels,
  showForecast,
  lang,
  classes,
  data,
  isLoading,
  errorMessage,
}) => {
  if (data) {
    const { forecast, current } = data;
    return (
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.left}>
            <h2 className={classes.header}>{data.location}</h2>
            <Today current={current} unitsLabels={unitsLabels} lang={lang} />
          </div>
          <div className={classes.right}>
            <WeatherIcon
              path={current.icon}
              size={120}
              color="white"
              title={current.description}
            />
          </div>
        </div>
        {showForecast && (
          <Forecast unitsLabels={unitsLabels} forecast={forecast} lang={lang} />
        )}
      </div>
    );
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return null;
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

ReactWeather.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  unitsLabels: PropTypes.object,
  showForecast: PropTypes.bool,
  lang: PropTypes.string,
};

ReactWeather.defaultProps = {
  data: null,
  errorMessage: null,
  isLoading: false,
  unitsLabels: {
    temperature: 'F',
    windSpeed: 'mph',
  },
  showForecast: true,
  lang: 'en',
};

export default style(ReactWeather);
