/**
 * Find maximum length sub-array having equal number of 0’s and 1’s
 * Given an binary array containing 0 and 1, find maximum length sub-array having equal number of 0’s and 1’s.
 *
 * For example,
 * Input:  { 0, 0, 1, 0, 1, 0, 0 }
 * Output: Largest subarray is { 0, 1, 0, 1 } or { 1, 0, 1, 0}
 *
 **/

function findEqual10(arr) {
    let result = [];
    let sumArr = [];
    let crntSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr = [];
        crntSum = 0;

        for (let j = i; j < arr.length; j++) {
            sumArr.push(arr[j]);
            crntSum += arr[j] ? 1 : -1;

            if (crntSum === 0 && result.length < sumArr.length) {
                result = sumArr.slice();
            }
        }
    }

    return result;
}

console.dir(findEqual10([0, 0, 1, 0, 1, 0, 0]));