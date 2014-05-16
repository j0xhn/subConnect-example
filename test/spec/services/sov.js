'use strict';

describe('Service: Sov', function () {

  // load the service's module
  beforeEach(module('subconnectApp'));

  // instantiate service
  var Sov;
  beforeEach(inject(function (_Sov_) {
    Sov = _Sov_;
  }));

  it('should do something', function () {
    expect(!!Sov).toBe(true);
  });

});
