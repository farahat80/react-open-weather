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
    this.state = {
      data: {},
      isLoading: true,
    };
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
          this.setState({ data: this.map(data, lang), isLoading: false });
        }
        return {};
      });
  }

  map(data, lang) {
    const { unit } = this.props;
    const units = getUnits(unit);
    const daysData = data.forecast.forecastday;
    const mapped = {};
    mapped.location = {
      name: data.location.name,
      country: data.location.country,
      lon: data.location.lon,
      lat: data.location.lat,
    };
    mapped.units = {
      temperature: units.temp,
      windSpeed: units.speed,
    };
    mapped.today = {
      date: formatDate(daysData[0].date, lang),
      description: daysData[0].day.condition.text,
      icon: daysData[0].day.condition.code,
      temperature: {
        current: data.current[FIELDS[unit].temperature.current].toFixed(0),
        min: daysData[0].day[FIELDS[unit].temperature.min].toFixed(0),
        max: daysData[0].day[FIELDS[unit].temperature.max].toFixed(0),
      },
      wind: daysData[0].day[FIELDS[unit].wind].toFixed(0),
      humidity: daysData[0].day.avghumidity,
    };

    mapped.forecast = daysData.slice(1).map(item => ({
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
    return mapped;
  }

  render() {
    const props = {
      isLoading: this.state.isLoading,
      ...this.state.data,
    };
    return this.props.children(props);
  }
}

XuApiProvider.propTypes = {};

XuApiProvider.defaultProps = {};

export default XuApiProvider;
