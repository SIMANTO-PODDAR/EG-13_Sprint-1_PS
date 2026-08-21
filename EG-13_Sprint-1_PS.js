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



console.log('6', findGCD(48, 18));
console.log('4', findGCD(20, 8));
console.log('5', findGCD(15, 10));
console.log('1', findGCD(17, 5));
console.log('25', findGCD(100, 25)); 