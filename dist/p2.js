"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertTemperature(value, unit) {
    if (unit === "C") {
        const F = (value * 9) / 5 + 32;
        const valueReturn = Math.round(F * 100) / 100;
        return valueReturn;
    }
    if (unit === "F") {
        const C = ((value - 32) * 5) / 9;
        const valueReturn = Math.round(C * 100) / 100;
        return valueReturn;
    }
    return 0;
}
console.log(convertTemperature(0, "C"));
console.log(convertTemperature(32, "F"));
console.log(convertTemperature(10, "F"));
console.log(convertTemperature(-40, "C"));
//# sourceMappingURL=p2.js.map