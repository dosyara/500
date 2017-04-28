/**
 * Find maximum length sub-array having given sum
 * Given an array of integers, find maximum length sub-array having given sum.
 *
 * For example, consider below array
 * A[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
 * Sum = 8
 * Output = { -5, 5, 3, 5 }
 *
 **/

function findArrayForSum(arr, sum) {
    let result = [];
    let sumArr = [];
    let crntSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr = [];
        crntSum = 0;

        for (let j = i; j < arr.length; j++) {
            sumArr.push(arr[j]);
            crntSum += arr[j];

            if (crntSum === sum && result.length < sumArr.length) {
                result = sumArr.slice();
            }
        }
    }

    return result;
}

console.dir(findArrayForSum([5, 6, -5, 5, 3, 5, 3, -2, 0], 8));