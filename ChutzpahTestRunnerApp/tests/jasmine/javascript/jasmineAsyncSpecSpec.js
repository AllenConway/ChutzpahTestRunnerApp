/// <reference path="../../../src/javascript/carService.js" />
/// <reference path="../../../src/javascript/engineCalculations.js" />
/// <reference path="../src/jasmine.js" />

xdescribe("Async calls using jasmine done callback via a promise", function () {
   var flag = false;

   beforeEach(function (done) {

      CarService.getCarsAsync()
      .then(function (result) {
         flag = result;

         //Invoke the jasmine done callback
         done();
      });
   });

   it("should be true once the promise is fulfilled", function () {      
      expect(flag).toEqual(true);
   });

});

describe("Async calls using the jasmine clock and tick functions", function () {
   beforeEach(function () {
      jasmine.clock().install();
   });
   
   afterEach(function () {
      jasmine.clock().uninstall();
   });

   it("should tick the clock forward and return the result of the fulfilled promise", function () {
      var result = false;
      Q.delay(10000).then(function () {
         result = true;
      });
      jasmine.clock().tick(10010);
      expect(result).toEqual(true);
   });
});