/**
 * 10. Regular Expression Matching
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = new Array(s.length + 1).fill([]);
  dp[0][0] = true;

  for (var i = 1; i <= s.length; i++) {
    for (var j = 1; j <= p.length; j++) {
      if (s[i] === p[j] || (p[j] === '.' && i < s.length - 1)) {
        dp[i][j] = dp[i-1][j-1];
      } else {

      }
    }
  }
};