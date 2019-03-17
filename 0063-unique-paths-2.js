/**
 * Unique Paths II
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time.
 * The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * Note: m and n will be at most 100.
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let dp = [];
  for (var i = 0; i < m; i++) {
    dp[i] = [];
  }

  if (obstacleGrid[0][0] === 1) {
    dp[0][0] = 0;
  } else {
    dp[0][0] = 1;
  }

  for (var i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[i][0] = 0;
    } else {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (var j = 1; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      dp[0][j] = 0;
    } else {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  // console.log(dp);
  return dp[m - 1][n - 1];
};

const tests = [{
  // 7
  grid: [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ],
}, {
  // 3
  grid: [
    [0,1,0],
    [0,0,0]
  ]
}, {
  grid: [[1]]
}];
tests.forEach(item => {
  var res = uniquePathsWithObstacles(item.grid);
  console.log(res);
});
