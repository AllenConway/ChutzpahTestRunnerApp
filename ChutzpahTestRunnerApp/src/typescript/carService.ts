﻿/// <reference path="../../Scripts/typings/q/Q.d.ts" />

class CarService {

    public getCars() {
        return [
            { year: 2001, make: "Ford", model: "Mustang COBRA SVT", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3630, et: 13.7 },
            { year: 2014, make: "Ford", model: "Mustang Shelby GT500", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3845, et: 11.6 },
            { year: 2015, make: "Dodge", model: "Challenger Hellcat", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 4449, et: 12.1 },
            { year: 2015, make: "Chevy", model: "Corvette Z06", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 3524, et: 11.3 },
            { year: 2015, make: "Ford", model: "Camaro ZL1", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 4120, et: 12.4 }
        ];

    }

    public getCarsAsync() {

        var result = Q.defer();

        //Some longer running API call...
        setTimeout(() => {
            result.resolve(true);
        }, 2500);

        return result.promise;
    }
}