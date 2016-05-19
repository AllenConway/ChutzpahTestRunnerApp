/// <reference path="carservice.ts" />
var EngineCalculations = (function () {
    function EngineCalculations(service) {
        var _this = this;
        this.service = service;
        this.horsepowerCalculations = {
            rearWheelHorsepower: 0,
            flywheelHorsepower: 0
        };
        this.calculations = {
            weight: 0,
            et: 0
        };
        this.engineHorsepower = function (calculations) {
            var hpCalc = calculations.et / 5.825;
            var rwHorsepower = Math.round((calculations.weight / Math.pow(hpCalc, 3)));
            //15 percent drivetrain loss on wheel and increase at flywheel (engine horsepower)
            var flywheelHP = (rwHorsepower * 1.146);
            var fwHorsepower = Math.round(flywheelHP);
            return _this.horsepowerCalculations = {
                rearWheelHorsepower: rwHorsepower,
                flywheelHorsepower: fwHorsepower
            };
        };
    }
    EngineCalculations.prototype.calculateCarData = function () {
        var cars = this.service.getCars();
        if (typeof cars !== "undefined") {
            //for (var car of cars) {
            for (var i = 0, c = cars; i < c.length; i++) {
                var car = c[i];
                var calc = {
                    weight: car.weight,
                    et: car.et
                };
                var hpCalcs = this.engineHorsepower(calc);
                car.rearWheelHorsepower = hpCalcs.rearWheelHorsepower;
                car.flywheelHorsepower = hpCalcs.flywheelHorsepower;
            }
        }
        return cars;
    };
    return EngineCalculations;
}());
;
//# sourceMappingURL=engineCalculations.js.map