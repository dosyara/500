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

function findArrayForSum2(arr, sum) {
    let map = {};
    let len = 0;
    let ending_index = -1;
    let crntSum = 0;

    for (let i = 0; i < arr.length; i++) {
        crntSum += arr[i];

        console.log(crntSum, map);
        if (!(crntSum in map)) {
            map[crntSum] = i;
        }

        let name = (crntSum - sum) + '';
        if (name in map && len < i - map[name]) {
            console.log('?', name);
            len =  i - map[name];
            ending_index = i;
        }

    }

    return {ending_index, len, result: arr.slice(ending_index - len + 1, ending_index + 1)};
}

console.dir(findArrayForSum([5, 6, -5, 5, 3, 5, 3, -2, 0], 8));
console.dir(findArrayForSum2([5, 6, -5, 5, 3, 5, 3, -2, 0], 8));