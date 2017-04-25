/**
 * Given an unsorted array of integers, find a pair with given sum in it.
 *
 * For example,
 *
 * Input:
 * arr = [8, 7, 2, 5, 3, 1]
 * sum = 10
 *
**/

function findPairsNaive(arr, sum) {
    let pairs = [];

    for (let i = 0, n = arr.length - 1; i < n; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([{ index0: i, val: arr[i] }, { index1: j, val: arr[j] }]);
            }
        }
    }

    return pairs;
}

function findPairsLinear(arr, sum) {
    let pairs = [];
    let hash = {};

    for (let i = 0, n = arr.length; i < n; i++) {
        let val = arr[i];
        let indexes = hash[sum - val];

        if (indexes) {
            indexes.forEach((index0) => {
                pairs.push([{ index0, value: sum - val }, { index1: i, value: val }]);
            });
        }

        hash[val] = hash[val] || [];
        hash[val].push(i);
    }

    return pairs;
}

console.log('naive');
console.dir(findPairsNaive([9, 8, 7, 2, 5, 3, 1, 9, 5], 10));

console.log('linear');
console.dir(findPairsLinear([9, 8, 7, 2, 5, 3, 1, 9, 5], 10));