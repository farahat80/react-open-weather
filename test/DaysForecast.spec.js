import React from 'react';
import { forecastData, mappedForecastData } from './fixtures/forecastdata.js';
import DaysForecast from '../src/js/components/DaysForecast';
import WeatherIcon from '../src/js/components/WeatherIcon';

describe('DaysForecast Component Shallow', () => {
  let wrapper;
  beforeEach(function () {
    wrapper = shallow(<DaysForecast
      unit="metric"
      forecast="5days"
      daysData={mappedForecastData.days}
    />);
  });
  afterEach(function () { });
  it('should render the component', () => {
    expect(wrapper.find('.rw-box-days')).to.have.length(1);
  });
  it('should render 4 days weather blocks', () => {
    expect(wrapper.find('.rw-day')).to.have.length(4);
  });
  it('should render the temprature range and unit for 4 days ahead', () => {
    expect(wrapper.find('.rw-range').at(0).text()).to.equal('25 / 15 C');
    expect(wrapper.find('.rw-range').at(1).text()).to.equal('22 / 13 C');
    expect(wrapper.find('.rw-range').at(2).text()).to.equal('28 / 15 C');
    expect(wrapper.find('.rw-range').at(3).text()).to.equal('27 / 17 C');
  });
  it('should render the date for 4 days ahead', () => {
    expect(wrapper.find('.rw-date').at(0).text()).to.equal('Fri 9 June');
    expect(wrapper.find('.rw-date').at(1).text()).to.equal('Sat 10 June');
    expect(wrapper.find('.rw-date').at(2).text()).to.equal('Sun 11 June');
    expect(wrapper.find('.rw-date').at(3).text()).to.equal('Mon 12 June');
  });
  it('should render the icon component for 4 days ahead', () => {
    expect(wrapper.find(WeatherIcon).at(0).props().name).to.equal("wi-day-cloudy");
    expect(wrapper.find(WeatherIcon).at(1).props().name).to.equal("wi-day-showers");
    expect(wrapper.find(WeatherIcon).at(2).props().name).to.equal("wi-day-sunny");
    expect(wrapper.find(WeatherIcon).at(3).props().name).to.equal("wi-day-sunny");
  });
});