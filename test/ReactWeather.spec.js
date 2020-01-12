import React from 'react';
import ReactWeather from '../src/js/components/ReactWeather';
import TodayForecast from '../src/js/components/TodayForecast';
import WeatherIcon from '../src/js/components/WeatherIcon';
import DaysForecast from '../src/js/components/DaysForecast';
import { mappedForecastData } from './fixtures/forecastdata';

describe('ReactWeather Component Shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <ReactWeather
        apikey="dummy-api-key"
        type="city"
        city="Munich"
        lang="en"
      />
    );
    wrapper.setState({ data: mappedForecastData });
  });
  it('should render the component', () => {
    expect(wrapper.find('.rw-box')).to.have.length(1);
  });
  it('should have a TodayForecast child', () => {
    expect(wrapper.find(TodayForecast)).to.have.length(1);
  });
  it('should have a WeatherIcon child', () => {
    expect(wrapper.find(WeatherIcon)).to.have.length(1);
  });
  it('should have a DaysForecast child', () => {
    expect(wrapper.find(DaysForecast)).to.have.length(1);
  });
  it('should render city title', () => {
    expect(wrapper.find('.rw-box-left h2').text()).to.equal('Munich');
  });
});
/* global mount, spy */
describe('ReactWeather Component Render', () => {
  it('should accept the props and generate params object', () => {
    const wrapper = mount(
      <ReactWeather
        apikey="dummy-api-key"
        type="city"
        city="Munich"
        lang="en"
      />
    );
    expect(wrapper.instance()._getParams()).to.deep.equal({
      q: 'Munich',
      lang: 'en',
    });
  });
  it('calls componentDidMount', () => {
    spy(ReactWeather.prototype, 'componentDidMount');
    mount(<ReactWeather apikey="dummy-api-key" type="city" city="Munich" />);
    expect(ReactWeather.prototype.componentDidMount.calledOnce).to.equal(true);
  });
  it('have default props', () => {
    const wrapper = mount(<ReactWeather apikey="dummy-api-key" />);
    expect(wrapper.props().unit).to.equal('metric');
    expect(wrapper.props().forecast).to.equal('today');
    expect(wrapper.props().type).to.equal('city');
    expect(wrapper.props().lang).to.equal('en');
  });
});
