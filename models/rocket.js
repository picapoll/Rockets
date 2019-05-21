"use strict";
var Car = /** @class */ (function () {
    function Car(name, maxPower) {
        this.engines = new Array();
        this.name = name;
        this.maxPower = maxPower;
    }
    Car.prototype.addEngine = function (engine) {
        this.engines.push(engine);
    };
    return Car;
}());
