// https://leetcode.com/problems/find-the-duplicate-number/description/

// One solution could be using sorting but that will take nlogn time.

// Approach 1 - TC -> O(n), SC -> O(n)
function findDuplicate1(nums: number[]) {
  const frequency = new Map<number, number>();
  for (const num of nums) {
    if (frequency.has(num)) return num;
    frequency.set(num, 1);
  }
}

// Approach 2 -
// study Floyd’s Cycle Finding algo
// https://leetcode.com/problems/find-the-duplicate-number/solutions/1892921/9-approaches-count-hash-in-place-marked-sort-binary-search-bit-mask-fast-slow-pointers
function findDuplicate2(nums: number[]) {}
