/// <reference path="../../../src/javascript/carService.js" />
/// <reference path="../../../src/javascript/engineCalculations.js" />
/// <reference path="../src/jasmine.js" />
describe("Engine Calculations", function () {
    it("should calculate Horsepower metrics", function () {
        //Arrange
        var service = CarService;
        var engineCalc = new EngineCalculations(service);
        engineCalc.calculations = {
            weight: 3630,
            et: 13.7
        };
        //Act
        var hpCalcs = engineCalc.engineHorsepower(engineCalc.calculations);
        //Assert
        expect(hpCalcs.flywheelHorsepower).toBe(320);
        expect(hpCalcs.rearWheelHorsepower).toBe(279);
    });
    it("should preform horsepower calculations on data from carService", function () {
        var service = CarService;
        var engineCalc = new EngineCalculations(service);
        var cars = engineCalc.calculateCarData();
        expect(cars[0].flywheelHorsepower).toBe(320);
        expect(cars[0].rearWheelHorsepower).toBe(279);
    });
});
//# sourceMappingURL=engineCalculationsSpec.js.map