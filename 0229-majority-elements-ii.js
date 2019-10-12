/**
 * 229. Majority Element II
 * https://leetcode.com/problems/majority-element-ii/
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Note: The algorithm should run in linear time and in O(1) space.
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let count = 1;
  let res = nums[0];

  for (var i = 0; i < nums.length; i++) {
    if (res === nums[i]) {
      count++;
    } else {
      count--;
    }

    if (count < 1) {
      res = nums[i];
      count = 1;
    }
  }

  return res;
};


var tests = [{
  input: [3,6,5,6,2,6,5,6,6],
  expected: 6,
}, {
  input: [2, 2, 2, 3, 3, 4, 5, 4, 4, 4, 4, 4, 4],
  expected: 4,
}, {
  input: [3,2,3],
  expected: 3,
}];

tests.forEach(item => {
  var res = majorityElement(item.input);
  console.log('res: ', res, ', expected: ', item.expected);
})
