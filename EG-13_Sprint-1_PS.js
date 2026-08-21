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



console.log('0', generateFibonacci(0))
console.log('1', generateFibonacci(1))
console.log('3', generateFibonacci(3))
console.log('7', generateFibonacci(7))
console.log('8', generateFibonacci(8))