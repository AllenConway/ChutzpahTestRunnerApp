/// <reference path="../../../src/javascript/carService.js" />
/// <reference path="../../../src/javascript/engineCalculations.js" />
/// <reference path="../src/jasmine.js" />

describe("car service when using jasmine spies", function() {

   //Jasmine Spies Tests
   it("should call carService using spyOn", function () {

      //Arrange
      var carSrvSpy = spyOn(CarService, "getCars");      

      //Act
      var result = CarService.getCars();

      //Assert
      expect(carSrvSpy).toHaveBeenCalled();

   });

   it("should call carService using spyOn and return mock data", function () {

      //Arrange
      var getCarsMock = [
         { year: 2016, make: "Test", model: "Car", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 1000, et: 10 }
      ];

      var carSrvSpy = spyOn(CarService, "getCars").and.returnValue(getCarsMock);      

      //Act
      var result = CarService.getCars();

      //Assert
      expect(result[0].year).toEqual(2016);

   });

   it("should call carService using spyOn with a fake implementation", function () {

      //Arrange
      var getCarsFake = function () {
         return [
            { year: 2016, make: "Test", model: "Car", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 1000, et: 10 }
         ];
      }

      var carSrvSpy = spyOn(CarService, "getCars").and.callFake(getCarsFake);     

      //Act
      var result = CarService.getCars();

      //Assert
      expect(result[0].year).toEqual(2016);

   });

   it("should call carService using spyOn toHaveBeenCalledWith matcher", function() {

      //Arrange
      var carSrvSpy = spyOn(CarService, "getCarsByYear");

      //Act
      var result = CarService.getCarsByYear(2001);

      //Assert
      expect(carSrvSpy).toHaveBeenCalledWith(2001);

   });

});

describe("engine calculations when using jasmine spies", function () {

   //Jasmine Spies Tests
   it("should call carService using createSpy", function () {

      //Arrange
      var carService = { getCars: jasmine.createSpy() };
      var engineCalc = new EngineCalculations(carService);

      //Act
      var result = engineCalc.calculateCarData();

      //Assert
      expect(carService.getCars).toHaveBeenCalled();

   });

   it("should return mock data from spied service using createSpy", function () {

      //Arrange
      var getCarsMock = [
         { year: 2016, make: "Test", model: "Car", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 1000, et: 10 }
      ];
      var carService = { getCars: jasmine.createSpy() };
      carService.getCars.and.returnValue(getCarsMock);      
      var engineCalc = new EngineCalculations(carService);
      
      //Act
      var result = engineCalc.calculateCarData();
      var cars = carService.getCars();

      //Assert
      expect(carService.getCars).toHaveBeenCalled();
      expect(cars[0].year).toEqual(2016);

   });

   //it("should call carService using createSpy and spyOn", function () {

   //   //Arrange
   //   var carSrvSpy = spyOn(CarService, "getCars");
   //   var engineCalc = new EngineCalculations(carSrvSpy);

   //   //Act
   //   var result = engineCalc.calculateCarData();

   //   //Assert
   //   expect(CarService.getCars).toHaveBeenCalled();

   //});

});