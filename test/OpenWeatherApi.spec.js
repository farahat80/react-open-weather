/* global spy */
import moxios from 'moxios';
import OpenWeatherApi from '../src/js/OpenWeatherApi';
import { forecastData, mappedForecastData } from './fixtures/forecastdata';
import { dayData } from './fixtures/daydata';

describe('Testing API calls', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should make an api call to weather data', done => {
    const api = new OpenWeatherApi('metric', 'test');
    const params = {
      q: 'munich',
    };
    const fulfilled = spy();
    api.getForecast(params).then(fulfilled);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: forecastData,
        })
        .then(response => {
          expect(response.data).to.equal(forecastData);
        })
        .then(done, done);
    });
  });
});

describe('Testing data mapping', () => {
  it('should map weather data', () => {
    const api = new OpenWeatherApi('metric', 'test');
    const mapped = api._map(forecastData, dayData);
    expect(mapped).to.deep.equal(mappedForecastData);
  });
});
