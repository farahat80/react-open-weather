import React from 'react';
import moxios from 'moxios';
import axios from 'axios';
import ReactWeather from '../src/js/ReactWeather';
import owApi from '../src/js/owApi';
import { dayData, mappedDayData } from './fixtures/daydata.js';
// import Foo from '../src/js/test-comp';
// import moxios from 'moxios';
//import {dayData, mappedDayData} from './fixtures/daydata.js';

describe('Hello World Component', () => {
  var sb
  beforeEach(function () {
    moxios.install()
    sb = sandbox.create();
  });
  afterEach(function () {
    sb.restore();
  });
  it('should render a <p> tag', (done) => {
    const promise = Promise.resolve(['de','am','hl']);
    sb.stub(owApi, 'getWeatherData', () => promise);
    const wrapper = shallow(<ReactWeather
      apikey="7ad07aac9b0943040a4abdd2c23dfc4e"
      type="city"
      city="Munich"
    />);
     promise.then(() => {
// wrapper.setState({data:mappedDayData});
  expect(wrapper.find('.rw-box')).to.have.length(1);
}).then(done, done);
  
  //expect(ReactWeather.prototype.componentDidMount.calledOnce).to.equal(true);
    // moxios.wait(function () {
    //   var request = moxios.requests.mostRecent()
    //   request.respondWith({
    //     status: 200,
    //     response: dayData
    //   }).then(function (response) {
        
        
    //   }).then(done, done)
    // });
    
  });
});

// describe('Hello World Component', () => {
//   const wrapper = shallow(<Foo />);

//   it('should render a <p> tag', () => {
//     expect(wrapper.find('.foo')).to.have.length(1);
//     expect(wrapper.state().email).to.equal('hello');
//     expect(wrapper.props().v).to.be.defined;
//   });
// });