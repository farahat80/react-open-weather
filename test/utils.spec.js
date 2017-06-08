import utils from '../src/js/utils';

describe('Utils module', () => {

  describe('getIcon', () => {
    it('return the weather-con class equivalent to OW class', () => {
      var icon = utils.getIcon("1006");
      expect(icon).to.equal("wi-cloudy");
    });
    it('return "na" if no mapped class name found', () => {
      var icon = utils.getIcon(null);
      expect(icon).to.equal("na");
    });
  });

  describe('getUnits', () => {
    it('return metric units', () => {
      var units = utils.getUnits("metric");
      expect(units).to.deep.equal({
        temp: "C",
        speed: "kph"
      });
    });
    it('return imperial units', () => {
      var units = utils.getUnits("imperial");
      expect(units).to.deep.equal({
        temp: "F",
        speed: "mph"
      });
    });
    it('return empty values if value provided doesnt exist', () => {
      var units = utils.getUnits(null);
      expect(units).to.deep.equal({
        temp: "",
        speed: ""
      });
    });
  });

  describe('formatDate', () => {
    it('return date value formatted to "ddd D MMM" from string', () => {
      var date = utils.formatDate("2017-06-08");
      expect(date).to.equal("Thu 8 Jun");
    });
    it('handles invalid input values', () => {
      expect(utils.formatDate(null)).to.equal("");
      expect(utils.formatDate("")).to.equal("");
    });
  });


});