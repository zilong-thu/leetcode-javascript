/**
 * 给你一个整数数组 A 和一个整数 K，请在该数组中找出两个元素，使它们的和小于 K 但尽可能地接近 K，返回这两个元素的和。
 * 如不存在这样的两个元素，请返回 -1。
 *   输入：A = [34,23,1,24,75,33,54,8], K = 60
 *   输出：58
 *   解释：
 *     34 和 24 相加得到 58，58 小于 60，满足题意。
 */


/**
 * [findNearestSmallInt description]
 * @param  {Array} arr [description]
 * @param  {Number} k   [description]
 * @return {Number}
 * 思路：
 *   dp[i] = {
 *     dp[i-1], 如果 dp[i-1] = k - 1，或者 arr[i] >= k
 *     用 arr[i] 与 0 ~ i-1 的元素相加进行寻找
 *   }
 */
function findNearestSmallInt(arr, k) {
  const dp = [];

  if (!arr || !arr.length) {
    return -1;
  }

  dp[0] = arr[0] < k ? arr[0] : -1;
  if (arr.length === 1) {
    return dp[0];
  }

  let sum = arr[0] + arr[1];
  dp[1] = sum < k ? sum : -1;
  if (arr.length === 2) {
    return dp[1];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] >= k) {
      dp[i] = dp[i - 1];
    } else if (arr[i] === k - 1 || dp[i - 1] === k - 1) {
      dp[i] = k - 1;
    } {
      let last = arr[i];
      let sum = dp[i - 1];
      for (let j = 0; j < i; j++) {
        let s = arr[j] + arr[i];
        if (s < k && s > sum) {
          sum = s;
        }
      }

      dp[i] = sum;
    }
  }

  return dp[arr.length - 1];
}


var tests = [{
  arr: [1, 2, 3],
  k: 2,
  expected: -1,
}, {
  arr: [1, 2, 3, 4],
  k: 4,
  expected: 3,
}, {
  arr: [34,23,1,24,75,33,54,8],
  k: 60,
  expected: 58,
}];

tests.forEach(item => {
  var res = findNearestSmallInt(item.arr, item.k);
  console.log('计算结果: ', res, ', expected: ', item.expected);
})
