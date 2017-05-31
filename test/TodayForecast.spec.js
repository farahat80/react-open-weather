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

// describe('ReactWeather Component Render', () => {
//   it('should accept the props and ggenerate params object', () => {
//     const wrapper = mount(<ReactWeather apikey="dummy-api-key" type="city" city="Munich" />);
//     expect(wrapper.instance()._getParams()).to.deep.equal({'q':'Munich'});
//   });
//   it('calls componentDidMount', () => {
//     spy(ReactWeather.prototype, 'componentDidMount');
//     const wrapper = mount(<ReactWeather apikey="dummy-api-key" type="city" city="Munich" />);
//     expect(ReactWeather.prototype.componentDidMount.calledOnce).to.equal(true);
//   });
//   it('have default props', () => {
//     const wrapper = mount(<ReactWeather apikey="dummy-api-key" />);
//     expect(wrapper.props().unit).to.equal("metric");
//     expect(wrapper.props().forecast).to.equal("today");
//     expect(wrapper.props().type).to.equal("geo");
//   });
// });