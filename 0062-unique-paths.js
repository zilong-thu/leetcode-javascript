/**
 * Unique Paths
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time.
 * The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = [];
  for (var i = 0; i < m; i++) {
    dp[i] = [];
  }

  dp[0][0] = 1;

  for (var i = 1; i < m; i++) {
    dp[i][0] = 1;
  }

  for (var j = 1; j < n; j++) {
    dp[0][j] = 1;
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

const tests = [{
  m: 3,
  n: 2,
}, {
  m: 2,
  n: 2,
}, {
  m: 8,
  n: 2,
}];
tests.forEach(item => {
  var res = uniquePaths(item.m, item.n);
  console.log(res);
});
