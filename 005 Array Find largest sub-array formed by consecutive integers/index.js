/**
 * Find largest sub-array formed by consecutive integers
 *
 * Given an array of integers, find largest sub-array formed by consecutive integers.
 * The sub-array should contain all distinct values.
 *
 * For example,
 * Input: { 2, 0, 2, 1, 4, 3, 1, 0 }
 * Output: The largest sub-array is { 0, 2, 1, 4, 3 }
 *
 **/

function findLargest(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let n = arr.length; n > i; n--) {
            let innerArr = arr.slice(i, n);

            if (isConsecutive(innerArr)) {
                if (result.length < innerArr.length) {
                    result = innerArr;
                }
            }
        }
    }

    return result;
}

function isConsecutive(arr) {
    if (hasDuplicates(arr)) return false;

    if (Math.max.apply(Math, arr) - Math.min.apply(Math, arr) !== arr.length - 1) {
        return false;
    }

    return true;
}

function hasDuplicates(arr) {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) return true;
        hash[arr[i]] = 1;
    }

    return false;
}

console.dir(findLargest([2, 0, 2, 1, 4, 3, 1, 0]));
