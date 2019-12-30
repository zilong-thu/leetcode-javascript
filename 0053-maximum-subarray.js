/**
 * 53. Maximum Subarray
 * Given an integer array nums,
 * find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length;
  let dp = new Array(len);
  dp[0] = nums[0];
  let max = nums[0];
  /**
   * dp[i] 的含义:
   *   表示 [0, ..., i] 范围内，以 nums[i] 为结尾的所有子数组的和的最大值
   */
  for (var i = 1; i < len; i++) {
    dp[i] = dp[i - 1] > 0 ? nums[i] + dp[i - 1] : nums[i];

    max = Math.max(max, dp[i]);
  }

  console.log(dp);
  return max;
};


let tests = [{
  nums: [-2,1,-3,4,-1,2,1,-5,4],
}];

tests.forEach(item => {
  var res = maxSubArray(item.nums);
  console.log(res);
});
