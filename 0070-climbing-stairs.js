/**
 * 70. Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Note: Given n will be a positive integer.
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // using dp[i] to be methods for stairs with a hight of i.
  let dp = [0, 1, 2];

  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};

const tests = [2, 3, 4];
tests.forEach(item => {
  var res = climbStairs(item);
  console.log(res);
});

// 4:
//   1, 1, 1, 1
//   2, 2
//   1, 2, 1
//   2, 1, 1
//   1, 1, 2
