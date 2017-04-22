
var moxios = require('moxios');
import owApi from '../src/js/owApi';
var dayFixture = require('./fixtures/daydata.js');


describe("Testing API calls", function () {
  var server, sb;

  beforeEach(function () {
    moxios.install()
  });
  afterEach(function () {
    moxios.uninstall()
  });

  it("should fake a request", function (done) {
    var api = new owApi("metric", "test");
    var params = {
      q: "munich"
    }
    var fulfilled = spy()
    api.getWeatherData(params).then(fulfilled)
    moxios.wait(function () {
      var request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: dayFixture
      }).then(function (response) {
        expect(fulfilled.called).to.equal(true);
        expect(response.data).to.equal(dayFixture);
      }).then(done, done)
    });
  });
});