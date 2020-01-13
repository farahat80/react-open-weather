import moment from 'moment';
import { icons } from './icons';
import { langText } from './lang';

module.exports = {
  getIcon(icon) {
    if (!icon) {
      return 'na';
    }
    const icoClass = icons[icon];
    if (icoClass) {
      return icoClass;
    }
    return 'na';
  },
  getUnits(unit) {
    if (unit === 'metric') {
      return {
        temp: '°C',
        speed: 'km/h',
      };
    } else if (unit === 'imperial') {
      return {
        temp: '°F',
        speed: 'mph',
      };
    }
    return { temp: '', speed: '' };
  },
  formatDate(dte, lang) {
    if (dte && moment(dte).isValid()) {
      moment.locale(lang);
      return moment.unix(dte).format('ddd D MMMM');
    }
    return '';
  },
  getLangs(lang) {
    return langText[lang] === undefined ? langText.en : langText[lang];
  },
  getNextDays(tomorrow){  // Returns an array containing the next 4 days dates in format yyyy-mm-dd

    var fourDates = [];
    //var tomorrow = new Date(); // initialized at today
    var tomorrow_formated = "";

    // Creating the 4 dates in the good format
    for(var i=0; i<4; i++) {
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow_formated = tomorrow.getFullYear() + "-" + ("0" + tomorrow.getMonth()+1).slice(-2) + "-" + ("0" + tomorrow.getDate()).slice(-2);
      fourDates.push(tomorrow_formated);
    }
    
    return fourDates;
  }
};
