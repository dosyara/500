/**
 * Find index of 0 to be replaced to get maximum length sequence of continuous ones
 * Given a binary array, find the index of 0 to be replaced with 1 to get maximum length sequence of continuous ones.
 *
 * For example,
 *
 * Consider array { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 }
 * The index to be replaced is 7 to get continuous sequence of length 6 containing all 1’s.
 *
**/

const arr = [0, 0, 1, 0, 1, 1, 1, 0, 1, 1];

function findIndex(arr) {
    let index = -1;
    let lastIndex = -1;
    let maxLength = -1;
    let leftLength = 0;
    let rightLength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // console.log(i, maxLength, leftLength, rightLength);
            if (maxLength < (leftLength + rightLength)) {
                maxLength = leftLength + rightLength;
                index = lastIndex === -1 ? i : lastIndex;
            }

            leftLength = rightLength;
            rightLength = 0;
            lastIndex = i;
        } else {
            rightLength += 1;
        }
    }
    if (maxLength < (leftLength + rightLength)) {
        index = lastIndex;
    }

    return index;
}

const index = findIndex(arr);
console.log(index);

console.log(findIndex([0, 0, 1, 0, 1, 1, 1, 0, 1, 1]) === 7);
console.log(findIndex([1, 1, 1, 0, 1, 1, 1, 0, 1, 1]) === 3);
console.log(findIndex([0, 0, 0, 0, 1, 1, 1, 1, 1, 1]) === 3);
console.log(findIndex([0, 0, 0, 0, 1, 1, 1, 1, 1, 0]) === 3);
console.log(findIndex([1, 1, 1, 0, 0, 0, 0, 0, 0, 0]) === 3);