"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findRainfallPeaks(rainfall) {
    const peaks = [];
    for (let i = 1; i < rainfall.length - 1; i++) {
        const current = rainfall[i];
        const previous = rainfall[i - 1];
        const next = rainfall[i + 1];
        if (current !== undefined && previous !== undefined && next !== undefined && current > previous && current > next) {
            peaks.push(i + 1);
        }
    }
    return peaks;
}
console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]));
// [2, 5]
console.log(findRainfallPeaks([1, 2, 3, 2, 1]));
// [3]
console.log(findRainfallPeaks([]));
// []
//# sourceMappingURL=p5.js.map