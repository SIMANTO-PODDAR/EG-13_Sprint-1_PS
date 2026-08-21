function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}



function generateFibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    const farr = [0, 1];

    for (let i = 2; i < n; i++) {
        farr.push(farr[i - 2] + farr[i - 1]);
    }

    return farr;
}



function findGCD(a, b) {
    for ( ; b !== 0; ) {
        const remainder = a % b;

        a = b;
        b = remainder;
    }

    return a;
}



function findLCM(a, b) {
    const inputA = a;
    const inputB = b;

    for ( ; b !== 0; ) {
        const remainder = a % b;

        a = b;
        b = remainder;
    }

    return (inputA * inputB) / a;
}



console.log('36', findLCM(12, 18));
console.log('24', findLCM(8, 12));
console.log('30', findLCM(15, 10));
console.log('85', findLCM(17, 5));
console.log('100', findLCM(100, 25));