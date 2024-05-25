// https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-array-1587115620/1

class Solution {
  printIntersection(arr1, arr2, N, M) {
    const result = [];

    let index1 = 0;
    let index2 = 0;

    while (index1 < N && index2 < M) {
      const current_arr1 = arr1[index1];
      const current_arr2 = arr2[index2];

      if (current_arr1 === current_arr2) {
        if (result[result.length - 1] !== current_arr1) {
          result.push(current_arr1);
        }
        index1++;
        index2++;
      } else if (current_arr1 < current_arr2) {
        index1++;
      } else {
        index2++;
      }
    }

    return result.length ? result : -1;
  }
}

const solution = new Solution();

console.log(
  solution.printIntersection([1, 2, 2, 3, 4], [2, 2, 4, 6, 7, 8], 5, 6)
);
