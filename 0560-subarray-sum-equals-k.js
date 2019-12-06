/**
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/solution/
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  if (nums.length < 1) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0] === k ? 1 : 0;
  }

  /**
   * sum[i] 表示从 0 到 i 下标所有数组项的和，i >= 0
   * @type {Array}
   */
  const sum = [];
  let count = 0;
  sum[0] = nums[0];
  const obj = {};
  obj[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
    let target = sum[i] + k;
    obj[target] = 0;
  }


  for (var i = 0; i < sum.length; i++) {
    if (obj[sum[i]] !== undefined) {
      obj[sum[i]]++;
      count += obj[sum[i]];
    }
  }

  console.log(sum, obj);

  return count;
};


const tests = [{
  input: [1, 1, 1],
  k: 2,
  expected: 2,
}, {
  input: [2, 3, 4, 5, 4, 3, 2, 1],
  k: 7,
  expected: 2,
}, {
  input: [1, 2, 3],
  k: 3,
  expected: 2,
}, {
  input: [0,0,0,0,0,0,0,0,0,0],
  k: 0,
  expected: 55,
}];



tests.forEach(item => {
  let res = subarraySum(item.input, item.k);
  console.log('计算结果: ', res, ', expected: ', item.expected);
});
