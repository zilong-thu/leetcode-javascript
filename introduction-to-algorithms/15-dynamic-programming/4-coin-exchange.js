var coins = [1, 2, 5, 10];

function exchange(N) {
  /**
   * dp[i] 表示找零总额为 i 时需要的最少的硬币数
   * @type {Array}
   */
  var dp = [];
  dp[0] = 0;
  dp[1] = 1;

  for (var i = 1; i <= N; i++) {
    for (var j = 0; j < coins.length; j++) {
      const diff = i - coins[j];
      if (diff >= 0) {
        dp[i] = Math.min(dp[diff] + 1, dp[i - 1] + 1);
      }
    }
  }

  return dp[N];
}

const tests = [{
  input: 13,
  expect: 3,
}, {
  input: 6,
  expect: 2,
}, {
  input: 1,
  expect: 1,
}, {
  input: 3,
  expect: 2,
}];

tests.forEach(item => {
  var res = exchange(item.input);
  console.log(`input: ${item.input}, expect: ${item.expect}, got: ${res}`);
});
