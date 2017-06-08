import moment from 'moment';

module.exports = {
  icons: {
    day: {
      '1009': 'wi-cloud',
      '1063': 'wi-day-sleet-storm',
      '1000': 'wi-day-sunny',
      '1003': 'wi-day-cloudy',
      '1006': 'wi-cloudy',
      '1240': 'wi-day-showers',
      '1195': 'wi-day-rain',
      '1087': 'wi-day-thunderstorm',
      '1225': 'wi-day-snow-wind',
      '1135': 'wi-day-fog',
    },
    night: {
      '1009': 'wi-cloud',
      '1063': 'wi-night-alt-sleet-storm',
      '1000': 'wi-night-clear',
      '1003': 'wi-night-alt-cloudy',
      '1006': 'wi-cloudy',
      '1240': 'wi-night-alt-showers',
      '1195': 'wi-night-alt-rain-wind',
      '1087': 'wi-night-alt-thunderstorm',
      '1225': 'wi-night-alt-snow',
      '1135': 'wi-night-fog'
    }
  },
  getIcon(icon) {
    if (!icon) { return 'na'; }
    let time = 'day';
    const icoClass = this.icons[time][icon];
    if (icoClass) {
      return icoClass;
    }
    return 'na';
  },
  getUnits(unit) {
    if (unit === 'metric') {
      return {
        temp: 'C',
        speed: 'kph'
      };
    } else if (unit === 'imperial') {
      return {
        temp: 'F',
        speed: 'mph'
      };
    }
    return { temp: '', speed: '' };
  },
  formatDate(dte) {
    if (dte && moment(dte).isValid()) {
      return moment(dte).format('ddd D MMM');
    }
    return '';
  }
};
