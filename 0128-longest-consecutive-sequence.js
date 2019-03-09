/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence
 * Your algorithm should run in O(n) complexity.
 * Example:
 *   Input: [100, 4, 200, 1, 3, 2]
 *   Output: 4
 *   Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  var map = {};
  nums.forEach(item => {
    if (map[item] === undefined) {
      map[item] = true;
    }
  });
  console.log(map);

  let max = 0;
  Object.keys(map).forEach(item => {
    let i = 0;
    while (map[Number(item) + i]) {
      i++;
    }
    max = Math.max(max, i);
  });

  return max;
};

const testArr = [100, 4, 200, 1, 3, 2];
const res = longestConsecutive(testArr);
console.log(res);
