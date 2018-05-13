import moment from 'moment';
import { icons } from './icons';
import { langText } from './lang';

module.exports = {
  getIcon(icon) {
    if (!icon) { return 'na'; }
    let time = 'day';
    const hour = new Date().getHours();
    if (hour > 6 && hour < 20) {
      time = 'day';
    } else {
      time = 'night';
    }
    const icoClass = icons[time][icon];
    if (icoClass) {
      return icoClass;
    }
    return 'na';
  },
  getUnits(unit) {
    if (unit === 'metric') {
      return {
        temp: 'C',
        speed: 'km/h'
      };
    } else if (unit === 'imperial') {
      return {
        temp: 'F',
        speed: 'mph'
      };
    }
    return { temp: '', speed: '' };
  },
  formatDate(dte, lang) {
    if (dte && moment(dte).isValid()) {
      moment.locale(lang);
      return moment(dte).format('ddd D MMMM');
    }
    return '';
  },
  getLangs(lang) {
    return langText[lang] === undefined ? langText.en : langText[lang];
  }
};
