/// <reference path="../src/jasmine.js" />

describe("basic jasmine unit tests", function () {

   it("should be true", function() {
      expect(true).toBe(true);
   });

   describe("using beforeEach and afterEach", function () {

      var personTest;
      var Person = function () {
         this.name = "";
      };

      beforeEach(function () {
         personTest = new Person();
         personTest.name = "Allen Conway";
      });

      it("the Person object should not be null", function () {
         expect(personTest).not.toBe(null);
      });

      it("the Person name should be Allen Conway", function () {
         expect(personTest.name).toEqual("Allen Conway");
      });

      afterEach(function () {
         //Some required cleanup
         personTest = null;
      });

   });

});

