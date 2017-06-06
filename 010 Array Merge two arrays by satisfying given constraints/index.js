/**
 * Merge two arrays by satisfying given constraints
 *
 * Given two sorted arrays X[] and Y[] of size m and n each where m >= n and X[] has exactly n vacant cells,
 * merge elements of Y[] in their correct position in array X[] i.e. merge (X, Y) by keeping the sorted order.
 *
 * For example,
 * Input:
 * X[] = { 0, 2, 0, 3, 0, 5, 6, 0, 0 }
 * Y[] = { 1, 8, 9, 10, 15 }
 *
 * The vacant cells in X[] is represented by 0
 * Output:
 * X[] = { 1, 2, 3, 5, 6, 8, 9, 10, 15 }
 *
 **/

function mergeVacantNaive(arr1, arr2) {
    let val = arr2.shift();
    let lastStart = 0;

    while(val) {
        let prev = 0;
        let crnt;
        let lastPos = -1;

        for (let i  = lastStart; i < arr1.length; i++) {
            crnt = arr1[i];
            if (crnt === 0) {
                lastPos = i;
                for (; i < arr1.length; i++) {
                    crnt = arr1[i];
                    if (crnt) break;
                }
            }

            if (val > prev && (val < crnt || i >= arr1.length - 1)) {
                if (lastPos !== -1) {
                    arr1[lastPos] = val;
                    lastStart = lastPos;
                } else {
                    shiftLeftToVacant(arr1, i);
                    arr1[i] = val;
                    lastStart = i;
                }
                break;
            }

            prev = crnt;
            lastPos = -1;
        }

        val = arr2.shift();
    }
}

function shiftLeftToVacant(arr, pos) {
    let val = 0;
    let tmp = arr[pos];

    while (tmp) {
        tmp = arr[pos];
        arr[pos] = val;
        val = tmp;

        pos--;
    }
}

function squashAndMerge(arr1, arr2) {
    squashArray(arr1);
    mergeWithOrder(arr1, arr2);
}

function squashArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr1[i] === 0) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] !== 0) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    break;
                }
            }
        }
    }
}

function mergeWithOrder(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === 0 || (arr2[j] !== 0 && arr1[i] > arr2[j])) {
                [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
            }
        }
    }
}

let arr1 = [0, 2, 0, 3, 0, 5, 6, 0, 0];
let arr2 = [1, 8, 9, 10, 15];
// mergeVacantNaive(arr1, arr2);
squashAndMerge(arr1, arr2);

console.log(arr1);