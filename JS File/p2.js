function countNumberProperties(numbers) {
    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            even++;
        } else {
            odd++;
        }

        if (number > 0) {
            positive++;
        } else if (number < 0) {
            negative++;
        }
    }

    return {
        even: even,
        negative: negative,
        odd: odd,
        positive: positive
    };
}

console.log(countNumberProperties([-5, 0, 3, -4, 1]));
console.log(countNumberProperties([2,4,6,8,10]));