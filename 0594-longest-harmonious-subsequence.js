/**
 * 594. Longest Harmonious Subsequence
 * 最大协调子数组问题
 * We define a harmonious array is an array where the difference
 * between its maximum value and its minimum value is exactly 1.
 * Now, given an integer array, you need to find the length of its
 * longest harmonious subsequence among all its possible subsequences.
 * Example 1:
 *   Input: [1,3,2,2,5,2,3,7]
 *   Output: 5
 *   Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 * Note: The length of the input array will not exceed 20,000.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums = []) {
  const map = {};
  for (var i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (!map[val]) {
      map[val] = 1;
    } else {
      map[val]++;
    }
  }

  let max = 0;
  Object.keys(map).map(key => {
    const val = Number(key);
    if (map[val + 1]) {
      max = Math.max(max, map[val] + map[val + 1]);
    }
  });

  return max;
};

const arr = [1,3,2,2,5,2,3,7];
console.log(findLHS(arr));
