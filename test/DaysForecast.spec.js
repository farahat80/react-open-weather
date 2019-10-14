/* global shallow */
import React from 'react';
import { mappedForecastData } from './fixtures/forecastdata';
import DaysForecast from '../src/js/components/DaysForecast';
import WeatherIcon from '../src/js/components/WeatherIcon';

describe('DaysForecast Component Shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <DaysForecast
        unit="metric"
        forecast="5days"
        daysData={mappedForecastData.days}
      />
    );
  });
  afterEach(() => {});
  it('should render the component', () => {
    expect(wrapper.find('.rw-box-days')).to.have.length(1);
  });
  it('should render 4 days weather blocks', () => {
    expect(wrapper.find('.rw-day')).to.have.length(4);
  });
  it('should render the temprature range and unit for 4 days ahead', () => {
    expect(
      wrapper
        .find('.rw-range')
        .at(0)
        .text()
    ).to.equal('18 / 10 C');
    expect(
      wrapper
        .find('.rw-range')
        .at(1)
        .text()
    ).to.equal('15 / 8 C');
    expect(
      wrapper
        .find('.rw-range')
        .at(2)
        .text()
    ).to.equal('15 / 8 C');
    expect(
      wrapper
        .find('.rw-range')
        .at(3)
        .text()
    ).to.equal('16 / 7 C');
  });
  it('should render the date for 4 days ahead', () => {
    expect(
      wrapper
        .find('.rw-date')
        .at(0)
        .text()
    ).to.equal('Tue 15 October');
    expect(
      wrapper
        .find('.rw-date')
        .at(1)
        .text()
    ).to.equal('Wed 16 October');
    expect(
      wrapper
        .find('.rw-date')
        .at(2)
        .text()
    ).to.equal('Thu 17 October');
    expect(
      wrapper
        .find('.rw-date')
        .at(3)
        .text()
    ).to.equal('Fri 18 October');
  });
  it('should render the icon component for 4 days ahead', () => {
    expect(
      wrapper
        .find(WeatherIcon)
        .at(0)
        .props().name
    ).to.equal('wi-day-rain');
    expect(
      wrapper
        .find(WeatherIcon)
        .at(1)
        .props().name
    ).to.equal('wi-day-rain');
    expect(
      wrapper
        .find(WeatherIcon)
        .at(2)
        .props().name
    ).to.equal('wi-cloudy');
    expect(
      wrapper
        .find(WeatherIcon)
        .at(3)
        .props().name
    ).to.equal('wi-cloudy');
  });
});
