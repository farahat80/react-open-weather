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
        daysData={mappedForecastData}
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
    ).to.equal('6 / -0 °C');
    expect(
      wrapper
        .find('.rw-range')
        .at(1)
        .text()
    ).to.equal('8 / -0 °C');
    expect(
      wrapper
        .find('.rw-range')
        .at(2)
        .text()
    ).to.equal('8 / -0 °C');
    expect(
      wrapper
        .find('.rw-range')
        .at(3)
        .text()
    ).to.equal('8 / 2 °C');
  });
  it('should render the date for 4 days ahead', () => {
    expect(
      wrapper
        .find('.rw-date')
        .at(0)
        .text()
    ).to.equal('Mon 13 January');
    expect(
      wrapper
        .find('.rw-date')
        .at(1)
        .text()
    ).to.equal('Tue 14 January');
    expect(
      wrapper
        .find('.rw-date')
        .at(2)
        .text()
    ).to.equal('Wed 15 January');
    expect(
      wrapper
        .find('.rw-date')
        .at(3)
        .text()
    ).to.equal('Thu 16 January');
  });
  it('should render the icon component for 4 days ahead', () => {
    expect(
      wrapper
        .find(WeatherIcon)
        .at(0)
        .props().name
    ).to.equal('wi-cloudy');
    expect(
      wrapper
        .find(WeatherIcon)
        .at(1)
        .props().name
    ).to.equal('wi-cloudy');
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
    ).to.equal('wi-day-cloudy');
  });
});
