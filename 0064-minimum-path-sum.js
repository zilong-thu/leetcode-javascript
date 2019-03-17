/**
 * Minimum Path Sum
 * Given a m x n grid filled with non-negative numbers,
 * find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // 行数
  let m = grid.length;
  // 列数
  let n = grid[0].length;

  let dp = [];
  for (var i = 0; i < m; i++) {
    dp[i] = [];
  }

  dp[0][0] = grid[0][0];

  for (var i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (var i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      let left = dp[i][j - 1];
      let top  = dp[i - 1][j];
      dp[i][j] = Math.min(top, left) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

const tests = [{
  // 7
  grid: [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ],
}, {
  // 3
  grid: [
    [1,2],
    [1,1]
  ]
}];
tests.forEach(item => {
  var res = minPathSum(item.grid);
  console.log(res);
});
