/**
 * 3Sum Closest
 * Given an array nums of n integers and an integer target,
 * find three integers in nums such that the sum is closest to target. Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  var len = nums.length;
  var closest = nums[0] + nums[1] + nums[len - 1];

  for (var i = 0; i < len - 2; i++) {
    var j = i + 1;
    var k = len - 1;
    while (j < k) {
      var _sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(_sum - target) <= Math.abs(closest - target)) {
        closest = _sum;
      }

      if (_sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return closest;
};

var tests = [{
  nums: [-1, 2, 1, -4],
  target: 1,
}, {
  nums: [0,0,0,0],
  target: [1],
}, {
  nums: [-2,0,1,1,2],
  target: 1,
}];

tests.forEach(item => {
  var res = threeSumClosest(item.nums, item.target);
  console.log(res);
});
