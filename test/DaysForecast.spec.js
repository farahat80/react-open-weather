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
  it('should render the current temprature and unit for 4 days ahead', () => {
    expect(wrapper.find('.rw-current').at(0).text()).to.equal('8 C');
    expect(wrapper.find('.rw-current').at(1).text()).to.equal('14 C');
    expect(wrapper.find('.rw-current').at(2).text()).to.equal('19 C');
    expect(wrapper.find('.rw-current').at(3).text()).to.equal('12 C');
  });
  it('should render the date for 4 days ahead', () => {
    expect(wrapper.find('.rw-date').at(0).text()).to.equal('Sun 23 Apr');
    expect(wrapper.find('.rw-date').at(1).text()).to.equal('Mon 24 Apr');
    expect(wrapper.find('.rw-date').at(2).text()).to.equal('Tue 25 Apr');
    expect(wrapper.find('.rw-date').at(3).text()).to.equal('Wed 26 Apr');
  });
  it('should render the icon component for 4 days ahead', () => {
    expect(wrapper.find(WeatherIcon).at(0).props().name).to.equal("wi-day-snow-wind");
    expect(wrapper.find(WeatherIcon).at(1).props().name).to.equal("wi-day-sunny");
    expect(wrapper.find(WeatherIcon).at(2).props().name).to.equal("wi-day-cloudy");
    expect(wrapper.find(WeatherIcon).at(3).props().name).to.equal("wi-day-rain");
  });
});