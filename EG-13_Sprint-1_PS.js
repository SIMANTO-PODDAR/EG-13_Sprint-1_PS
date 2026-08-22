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



function findMedian(nums) {
    const sorted = [...nums].sort((a, b) => a - b)
    const median = Math.floor(sorted.length / 2)

    if (sorted.length % 2 === 1) {
        return sorted[median]
    } else {
        return (sorted[median - 1] + sorted[median]) / 2
    }
}



function findSecondLargest(nums) {
    let firstLargest = null
    let secondLargest = null

    for (const num of nums) {
        if (firstLargest === null || num > firstLargest) {
            secondLargest = firstLargest
            firstLargest = num
        }
        else if (
            num !== firstLargest &&
            (secondLargest === null || num > secondLargest)
        ) {
            secondLargest = num
        }
    }
    return secondLargest;
}



function findMode(arr) {
    // Todo 
}



function naturalSort(arr) {
    return arr.sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true });
    });
}



console.log(
    ["file1.txt", "file10.txt", "file2.txt"],
    naturalSort(["file1.txt", "file10.txt", "file2.txt"])
);
console.log(
    ["item10", "item2", "item1"],
    naturalSort(["item10", "item2", "item1"])
);
console.log(
    ["photo20.jpg", "photo3.jpg", "photo11.jpg"],
    naturalSort(["photo20.jpg", "photo3.jpg", "photo11.jpg"])
);
console.log(
    ["chapter10", "chapter2", "chapter1"],
    naturalSort(["chapter10", "chapter2", "chapter1"])
);
console.log(
    ["test100", "test9", "test25", "test3"],
    naturalSort(["test100", "test9", "test25", "test3"])
);