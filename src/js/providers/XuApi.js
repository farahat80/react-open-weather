import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

const url = '//api.apixu.com/v1/forecast.json';

const formatDate = (dte, lang) => {
  if (dte && moment(dte).isValid()) {
    moment.locale(lang);
    return moment(dte).format('ddd D MMMM');
  }
  return '';
};

const getUnits = unit => {
  if (unit === 'metric') {
    return {
      temp: 'C',
      speed: 'km/h',
    };
  }
  if (unit === 'imperial') {
    return {
      temp: 'F',
      speed: 'mph',
    };
  }
  return { temp: '', speed: '' };
};

const FIELDS = {
  metric: {
    temperature: {
      current: 'temp_c',
      min: 'mintemp_c',
      max: 'maxtemp_c',
    },
    wind: 'maxwind_kph',
  },
  imperial: {
    temperature: {
      current: 'temp_f',
      min: 'mintemp_f',
      max: 'maxtemp_f',
    },
    wind: 'maxwind_mph',
  },
};

class XuApiProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { apiKey, lat, lon, lang } = this.props;
    const params = {
      key: apiKey,
      days: 5,
      lang,
      q: `${lat},${lon}`,
    };
    return axios
      .get(url, {
        params,
      })
      .then(({ data }) => {
        if (data) {
          this.setState({ data: this.map(data, lang) });
        }
        return {};
      });
  }

  map(data, lang) {
    const { unit } = this.props;
    const units = getUnits(unit);
    const daysData = data.forecast.forecastday;
    const mapped = {};
    mapped.location = data.location;
    mapped.temperatureUnit = units.temp;
    mapped.windSpeedUnit = units.speed;
    mapped.days = daysData.map(item => ({
      date: formatDate(item.date, lang),
      description: item.day.condition.text,
      icon: item.day.condition.code,
      temperature: {
        min: item.day[FIELDS[unit].temperature.min].toFixed(0),
        max: item.day[FIELDS[unit].temperature.max].toFixed(0),
      },
      wind: item.day[FIELDS[unit].wind].toFixed(0),
      humidity: item.day.avghumidity,
    }));
    if (mapped.days.length > 0) {
      mapped.days[0].temperature.current = data.current[
        FIELDS[unit].temperature.current
      ].toFixed(0);
    }
    return mapped;
  }

  render() {
    const props = {
      data: this.state.data,
    };
    return this.props.children(props);
  }
}

XuApiProvider.propTypes = {};

XuApiProvider.defaultProps = {};

export default XuApiProvider;
