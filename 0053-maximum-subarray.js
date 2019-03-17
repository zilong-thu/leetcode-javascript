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
  let sum = new Array(len);
  for (var i = 0; i < len; i++) {
    sum[i] = [];
    sum[i][i] = nums[i];
  }

  let max = nums[0];
  // let sum[ij] be the sum of sub array nums[i...j].
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      sum[i][j] = sum[i][j - 1] + nums[j];
      max = Math.max(sum[i][j], max);
    }
  }

  console.log(sum);
  return max;
};


let tests = [{
  nums: [-2,1,-3,4,-1,2,1,-5,4],
}];

tests.forEach(item => {
  var res = maxSubArray(item.nums);
  console.log(res);
});
