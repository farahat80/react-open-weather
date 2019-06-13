import React from 'react';
import PropTypes from 'prop-types';
import createStyle from 'react-jss';
import XuApi from '../XuApi';
import Today from './Today';
import Forecast from './Forecast';
import WeatherIcon from './WeatherIcon';

class ReactWeather extends React.Component {
  constructor(props) {
    super(props);
    this.api = new XuApi(props.unit, props.apikey, props.lang);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.getForecastData();
  }

  getForecastData() {
    const { lon, lat, lang } = this.props;
    const params = {
      q: `${lat},${lon}`,
      lang,
    };
    let promise = null;
    promise = this.api.getForecast(params);
    promise.then(data => {
      this.setState({
        data,
      });
    });
  }

  render() {
    const { forecast, lang, classes } = this.props;
    const { data } = this.state;
    if (data) {
      const { days } = data;
      const todayData = days[0];
      return (
        <div className={classes.container}>
          <div className={classes.main}>
            <div className={classes.left}>
              <h2 className={classes.header}>{data.location.name}</h2>
              <Today
                todayData={todayData}
                temperatureUnit={data.temperatureUnit}
                windSpeedUnit={data.windSpeedUnit}
                lang={lang}
              />
            </div>
            <div className={classes.right}>
              <WeatherIcon
                iconCode={todayData.icon}
                size={120}
                color="white"
                title={todayData.description}
              />
            </div>
          </div>
          {forecast && (
            <Forecast
              temperatureUnit={data.temperatureUnit}
              forecast={forecast}
              daysData={days}
              lang={lang}
            />
          )}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

ReactWeather.propTypes = {
  apikey: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  unit: PropTypes.oneOf(['metric', 'imperial']),
  type: PropTypes.oneOf(['geo', 'city', 'auto']),
  lat: PropTypes.string,
  lon: PropTypes.string,
  city: PropTypes.string,
  forecast: PropTypes.bool,
  lang: PropTypes.string,
};

ReactWeather.defaultProps = {
  unit: 'metric',
  type: 'auto',
  forecast: true,
  lang: 'en',
  lat: null,
  lon: null,
  city: '',
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
