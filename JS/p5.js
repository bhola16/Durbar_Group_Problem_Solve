function repeatedDigitSum(n) {

    while (n >= 10) {
        const splitNumber = n.toString().split("");
        let sum = 0;

        for (let digit of splitNumber) {
            sum += Number(digit);
        }

        n = sum;
    }

    return n;
}


console.log(repeatedDigitSum(9875)); // 2
console.log(repeatedDigitSum(123));  // 6
console.log(repeatedDigitSum(99));   // 9
console.log(repeatedDigitSum(10));   // 1
console.log(repeatedDigitSum(0));    // 0