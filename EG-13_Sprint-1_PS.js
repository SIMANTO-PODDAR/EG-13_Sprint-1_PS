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
    for (; b !== 0;) {
        const remainder = a % b;

        a = b;
        b = remainder;
    }

    return a;
}



function findLCM(a, b) {
    const inputA = a;
    const inputB = b;

    for (; b !== 0;) {
        const remainder = a % b;

        a = b;
        b = remainder;
    }

    return (inputA * inputB) / a;
}



function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const numsqrt = Math.sqrt(num);

    for (let i = 3; i <= numsqrt; i += 2) {
        if (num % i === 0) {
            return false
        }
    }

    return true;
}



function mergeSortedArrays(arr1, arr2) {
    const mrgArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mrgArr.push(arr1[i]);
            i++;
        } else {
            mrgArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mrgArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mrgArr.push(arr2[j]);
        j++;
    }

    return mrgArr
}



console.log('[1, 2, 3, 4, 5, 6]', mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log('[1, 2, 3, 4, 5]', mergeSortedArrays([1, 2, 5], [3, 4]));
console.log('[1, 2, 3, 4, 5, 6, 7]', mergeSortedArrays([1, 4, 6], [2, 3, 5, 7]));
console.log('[2, 4, 6, 8]', mergeSortedArrays([], [2, 4, 6, 8]));
console.log('[1, 2, 3, 4]', mergeSortedArrays([1, 2, 3, 4], []));