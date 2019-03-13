/**
 * Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var obj = {};
  var res = [];

  for (var i = 0; i < nums.length; i++) {
    var myPart = target - nums[i];
    if (obj[myPart] !== undefined) {
      res = [obj[myPart], i];
      continue;
    } else {
      obj[nums[i]] = i;
    }
  }

  return res;
};


var tests = [{
  nums: [2, 7, 11, 15],
  target: 9,
}, {
  nums: [2, 7, 10, 11, 15],
  target: 13,
}];

tests.forEach(item => {
  var res = twoSum(item.nums, item.target);
  console.log(res);
});
