/* global shallow */
import React from 'react';
import { mappedForecastData } from './fixtures/forecastdata';
import TodayForecast from '../src/js/components/TodayForecast';

describe('TodayForecast Component Shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodayForecast
      unit='metric'
      lang='es'
      todayData={mappedForecastData.days[0]}
    />);
  });
  afterEach(() => { });
  it('should render the component', () => {
    expect(wrapper.find('.rw-today')).to.have.length(1);
  });
  it('should render the date', () => {
    expect(wrapper.find('.date').text()).to.equal('Thu 8 June');
  });
  it('should render the current temprature and unit', () => {
    expect(wrapper.find('.current').text()).to.equal('17 C');
  });
});
