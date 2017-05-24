/**
 * Inplace merge two sorted arrays
 *
 * Given two sorted arrays X[] and Y[] of size m and n each,
 * merge elements of X[] with elements of array Y[] by maintaining the sorted order.
 * i.e. fill X[] with first m smallest elements and fill Y[] with remaining elements.
 *
 * The conversion should be done in-place and without using any other data structure.
 *
 * For example,
 * Input:
 * X[] = { 1, 4, 7, 8, 10 }
 * Y[] = { 2, 3, 9 }
 * Output:
 * X[] = { 1, 2, 3, 4, 7 }
 * Y[] = { 8, 9, 10 }
 *
 **/

function inplaceSort(arr1, arr2) {
    let i, j, k = 0;

    let val2 = shiftLeft(arr2, arr2.length-1);
    let val1;
    while (val2) {
        let i = arr1.length - 1;
        while (i>=0) {
            if (!arr1[i - 1] || arr1[i - 1] < val2) {
                val1 = shiftRight(arr1, i);
                arr1[i] = val2;
                break;
            }
            i--;
        }

        if (val1) {
            let j = arr2.length - 1;
            while (j>=0) {
                if (!arr2[j - 1] || arr2[j - 1] < val1) {
                    val2 = shiftRight(arr2, j);
                    arr2[j] = val1;
                    break;
                }
                j--;
            }
        }

        k++;
        if (k > arr2.length) break;
        val2 = shiftLeft(arr2, arr2.length-1);
    }

}

function inplaceSort2(arr1, arr2) {
    let n1 = arr1.length;
    let n2 = arr2.length;

    let i = 0;
    while (i < n1) {
        if (arr1[i] > arr2[0]) {
            let tmp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = tmp;

            let first = arr2[0];
            let k;
            for (k = 1; k < n2 && arr2[k] < first; k++) {
                arr2[k - 1] = arr2[k];
            }

            arr2[k - 1] = first;
        }
        i++;
    }
}

function swap(arr1, i1, arr2, i2) {
    let tmp = arr1[i1];
    arr1[i1] = arr2[i2];
    arr2[i2] = tmp;
}

let arr1 = [1, 4, 7, 8, 10];
let arr2 = [2, 3, 9];
inplaceSort2(arr1, arr2);

function shiftRight(arr, index) {
    let prev;

    for (let i = index; i < arr.length; i++) {
        let tmp = arr[i];
        arr[i] = prev;
        prev = tmp;
    }

    return prev;
}
function shiftLeft(arr, index) {
    let prev;

    for (let i = index; i >= 0; i--) {
        let tmp = arr[i];
        arr[i] = prev;
        prev = tmp;
    }

    return prev;
}
console.log(arr1, arr2);