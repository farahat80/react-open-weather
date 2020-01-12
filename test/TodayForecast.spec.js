/* global shallow */
import React from 'react';
import { mappedDayData } from './fixtures/daydata';
import TodayForecast from '../src/js/components/TodayForecast';

describe('TodayForecast Component Shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TodayForecast
        unit="metric"
        lang="en"
        todayData={mappedDayData}
      />
    );
  });
  afterEach(() => {});
  it('should render the component', () => {
    expect(wrapper.find('.rw-today')).to.have.length(1);
  });
  it('should render the date', () => {
    expect(wrapper.find('.date').text()).to.equal('Sun 12 January');
  });
  it('should render the current temprature and unit', () => {
    expect(wrapper.find('.current').text()).to.equal('4 °C');
  });
});
