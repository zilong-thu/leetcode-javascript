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

  let dp = new Array(m + 1).fill(new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
  let first = grid[0][0];
  dp[0][1] = 0;
  dp[1][0] = 0;
  dp[0][0] = 0;
  dp[1][1] = first;

  for (var i = 1; i <= m; i++) {
    for (var j = 1; j <= n; j++) {
      let ig = i - 1;
      let jg = j - 1;

      let left = dp[i][j - 1] + grid[ig][jg];
      let top  = dp[i - 1][j] + grid[ig][jg];
      dp[i][j] = Math.min(left, top);
    }
  }

  return dp[m][n];
};

const tests = [{
  grid: [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ],
}];
tests.forEach(item => {
  var res = minPathSum(item.grid);
  console.log(res);
});
