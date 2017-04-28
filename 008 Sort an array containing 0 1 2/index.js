/**
 * Sort an array containing 0’s, 1’s and 2’s (Dutch national flag problem)
 * Given an array containing only 0’s, 1’s and 2’s, sort the array in linear time and using constant space.
 *
 * For example,
 *
 * Input:  { 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 }
 * Output: { 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2 }
 *
 **/


function sortFlag(arr) {
    let start = 0;
    let i = 0;
    let end = arr.length - 1;
    let val;

    while (i <= end) {
        val = arr[i];

        if (val < 1) {
            swap(arr, start, i);
            start++;
            i++;
        } else if (val > 1) {
            swap(arr, end, i);
            end--;
        } else {
            i++;
        }
    }

    return arr;
}
function swap(arr, i0, i1) {
    let tmp = arr[i0];
    arr[i0] = arr[i1];
    arr[i1] = tmp;
}

console.dir(sortFlag([1, 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0, 2]));