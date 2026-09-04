function checkMathOperationsForNine(a:number, b:number): string {

    const sum:number = a + b;
    const difference:number = a - b;
    const product:number = a * b;
    const quotient:number = a / b;

    if ( sum === 9 || difference === 9 || product === 9 || quotient === 9){
        return "Nine";
    }
    return "Nein";
}

console.log(checkMathOperationsForNine(5,4));
console.log(checkMathOperationsForNine(5,5));
console.log(checkMathOperationsForNine(18,2));
console.log(checkMathOperationsForNine(3,3));
