import MockDate from 'mockdate';
import utils from '../src/js/utils';

describe('Utils module', () => {
  describe('getIcon', () => {
    it('return the weather-con class equivalent to OW class', () => {
      const icon = utils.getIcon('04d');
      expect(icon).to.equal('wi-cloudy');
    });
    it('return the weather-icon night class equivalent to OW class', () => {
      MockDate.set('2016-06-19T22:00:00');
      const icon = utils.getIcon('01n');
      expect(icon).to.equal('wi-day-sunny');
      MockDate.reset();
    });
    it('return na if no mapped class name found', () => {
      const icon = utils.getIcon(null);
      expect(icon).to.equal('na');
    });
  });

  describe('getUnits', () => {
    it('return metric units', () => {
      const units = utils.getUnits('metric');
      expect(units).to.deep.equal({
        temp: 'C',
        speed: 'km/h',
      });
    });
    it('return imperial units', () => {
      const units = utils.getUnits('imperial');
      expect(units).to.deep.equal({
        temp: 'F',
        speed: 'mph',
      });
    });
    it('return empty values if value provided doesnt exist', () => {
      const units = utils.getUnits(null);
      expect(units).to.deep.equal({
        temp: '',
        speed: '',
      });
    });
  });

  describe('formatDate', () => {
    it('return date value formatted to ddd D MMM from string', () => {
      const date = utils.formatDate(1571047200);
      expect(date).to.equal('Mon 14 October');
    });
    it('handles invalid input values', () => {
      expect(utils.formatDate(null)).to.equal('');
      expect(utils.formatDate('')).to.equal('');
    });
  });
});
