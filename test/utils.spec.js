import utils from '../src/js/utils';

describe('Utils module', () => {

  describe('getIcon', () => {
    it('return the weather-con class equivalent to OW class', () => {
      var icon = utils.getIcon("04n");
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
        speed: "Meter/Sec"
      });
    });
    it('return imperial units', () => {
      var units = utils.getUnits("imperial");
      expect(units).to.deep.equal({
        temp: "F",
        speed: "Miles/Hour"
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
    it('return date value formatted to "ddd D MMM" from unix string', () => {
      var date = utils.formatDate("1492772400");
      expect(date).to.equal("Fri 21 Apr");
    });
    it('handles invalid input values', () => {
      expect(utils.formatDate(null)).to.equal("");
      expect(utils.formatDate("")).to.equal("");
      expect(utils.formatDate("invalid unix string")).to.equal("");
    });
  });


});