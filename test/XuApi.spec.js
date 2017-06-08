import moxios from 'moxios';
import XuApi from '../src/js/XuApi';
import { forecastData, mappedForecastData } from './fixtures/forecastdata.js';

describe("Testing API calls", function () {

  beforeEach(function () {
    moxios.install()
  });
  afterEach(function () {
    moxios.uninstall()
  });

  it("should make an api call to weather data", function (done) {
    var api = new XuApi("metric", "test");
    var params = {
      q: "munich"
    }
    var fulfilled = spy()
    api.getForecast(params).then(fulfilled)
    moxios.wait(function () {
      var request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: forecastData
      }).then(function (response) {
        expect(fulfilled.called).to.equal(true);
        expect(response.data).to.equal(forecastData);
      }).then(done, done)
    });
  });
});

describe("Testing data mapping", function () {

  it("should map weather data", function () {
    var api = new XuApi("metric", "test");
    var mapped = api._map(forecastData);
    expect(mapped).to.deep.equal(mappedForecastData);
  });
});