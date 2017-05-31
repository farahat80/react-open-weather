import React from 'react';
import WeatherIcon from '../src/js/components/WeatherIcon';

describe('WeatherIcon Component Shallow', () => {
  it('should render the component', () => {
    const wrapper = shallow(<WeatherIcon name="ico-test"/>);
    expect(wrapper.find('.ico-test')).to.have.length(1);
  });
  it('should have property name defined', () => {
    const wrapper = shallow(<WeatherIcon name="ico-test"/>);
    expect(wrapper.instance().props.name).to.exist;
  });
});