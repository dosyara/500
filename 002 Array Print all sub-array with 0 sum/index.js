/**
 * Print all sub-array with 0 sum
 *
 * Given an array of integers, print all subarrays having 0 sum.
 *
 * For example,
 * Input:  { 4, 2, -3, -1, 0, 4 }
 * Sub-arrays with 0 sum are
 * { -3, -1, 0, 4 }
 * { 0 }
 **/


function findZeroSumArray(arr) {
    let sum;
    let tmpArr;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        tmpArr = [];

        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j];
            tmpArr.push(arr[j]);

            if (sum === 0) {
                result.push(tmpArr);
                tmpArr = tmpArr.slice();
            }
        }
    }

    return result;
}

console.dir(findZeroSumArray([ 4, 2, -3, -1, 0, 4 ]));
console.dir(findZeroSumArray([ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ]));
