import React from 'react';
import { dayData, mappedDayData } from './fixtures/daydata.js';
import TodayForecast from '../src/js/components/TodayForecast';

describe('TodayForecast Component Shallow', () => {
  let wrapper;
  beforeEach(function () {
    wrapper = shallow(<TodayForecast
      unit="metric"
      todayData={mappedDayData.days[0]}
    />);
  });
  afterEach(function () { });
  it('should render the component', () => {
    expect(wrapper.find('.rw-today')).to.have.length(1);
  });
  it('should render the date', () => {
    expect(wrapper.find('.date').text()).to.equal('Sat 22 Apr');
  });
  it('should render the current temprature and unit', () => {
    expect(wrapper.find('.current').text()).to.equal('7 C');
  });
  it('should render the current temprature and unit', () => {
    expect(wrapper.find('.current').text()).to.equal('7 C');
  });
});