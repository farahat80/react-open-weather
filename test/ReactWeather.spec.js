import React from 'react';
import ReactWeather from '../src/js/ReactWeather';
import { dayData, mappedDayData } from './fixtures/daydata.js';

describe('ReactWeather Component Shallow', () => {
  let wrapper;
  beforeEach(function () {
    wrapper = shallow(<ReactWeather
      apikey="dummy-api-key"
      type="city"
      city="Munich"
    />);
    wrapper.setState({ data: mappedDayData });
  });
  afterEach(function () {
    
  });
  it('should render the component', () => {
    expect(wrapper.find('.rw-box')).to.have.length(1);
  });
  it('should show one-day forecast data div', () => {
    expect(wrapper.find('.rw-day')).to.have.length(1);
  });
  it('should render city title', () => {
    expect(wrapper.find('h2').text()).to.equal('Altstadt');
  });
  it('should render the forecast date', () => {
    expect(wrapper.find('.rw-date').text()).to.equal('Sat 22 Apr');
  });
  it('should render the weather description', () => {
    expect(wrapper.find('.rw-desc').text()).to.equal('moderate rain');
  });
  it('should render the current temprature', () => {
    expect(wrapper.find('.rw-current').text()).to.equal('7 C');
  });
  it('should render the temprature range', () => {
    expect(wrapper.find('.rw-range').html()).to.equal('<div class="rw-range">6 C / 9 C </div>');
  });
  it('should render the temprature range', () => {
    expect(wrapper.find('.rw-info').text()).to.equal('Wind Speed: 5.7 Meter/SecHumidity: 87 %');
  });

});