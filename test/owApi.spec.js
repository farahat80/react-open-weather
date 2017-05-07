import moxios from 'moxios';
import owApi from '../src/js/owApi';
import { dayData, mappedDayData } from './fixtures/daydata.js';
import {  forecastData, mappedForecastData } from './fixtures/forecastdata.js';

describe("Testing API calls", function () {

  beforeEach(function () {
    moxios.install()
  });
  afterEach(function () {
    moxios.uninstall()
  });

  it("should make an api call to weather data", function (done) {
    var api = new owApi("metric", "test");
    var params = {
      q: "munich"
    }
    var fulfilled = spy()
    api.getWeatherData(params).then(fulfilled)
    moxios.wait(function () {
      var request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: dayData
      }).then(function (response) {
        expect(fulfilled.called).to.equal(true);
        expect(response.data).to.equal(dayData);
      }).then(done, done)
    });
  });

  it("should make an api call to forecast data", function (done) {
    var api = new owApi("metric", "test");
    var params = {
      q: "munich"
    }
    var fulfilled = spy()
    api.getForecastData(params).then(fulfilled)
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
    var api = new owApi();
    var mapped = api._mapWeatherData(dayData);
    expect(mapped).to.deep.equal(mappedDayData);
  });

  it("should map forecast data", function () {
    var api = new owApi();
    var mapped = api._mapForecastData(forecastData);
    expect(mapped).to.deep.equal(mappedForecastData);
  });

});