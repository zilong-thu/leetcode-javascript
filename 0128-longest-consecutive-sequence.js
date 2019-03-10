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
 * 思路就是，首先创建一个集合 set，用于后续判断某个元素是否存在
 * 然后遍历数组，使用一个对象作为计数器，当前元素 item 作为 key，其初始值为以 item+1 为 key 的值 +1
 * 不断循环即可
 */
var longestConsecutive = function(nums) {
  var set = {};
  nums.forEach(item => {
    if (set[item] === undefined) {
      set[item] = true;
    }
  });

  var map = {};
  let max = 0;
  nums.forEach(item => {
    let currentNum = item;
    let currentMax = 1;
    if (map[currentNum] === undefined) {
      map[currentNum] = 1 + (map[currentNum + 1] || 0);
      while(set[currentNum - 1]) {
        map[currentNum - 1] = map[currentNum] + 1;
        currentNum--;
      }
      currentMax = map[currentNum];
    }
    max = Math.max(currentMax, max);
  });
  console.log(map);

  return max;
};

const testArr = [100, 4, 200, 1, 3, 2];
const res = longestConsecutive(testArr);
console.log(res);
