/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s === t) {
    return true;
  }

  if (s.length > t.length) {
    return false;
  }

  if (s.length === 0) {
    return true;
  }

  const dp = [];

  const firstIndex = t.indexOf(s[0]);
  if (firstIndex > -1) {
    dp[0] = firstIndex;
  } else {
    dp[0] = false;
  }

  for (var i = 1; i < s.length; i++) {
    if (!dp[i - 1] && dp[i - 1] !== 0) {
      break;
      return false;
    } else {
      for (var j = dp[i - 1] + 1; j < t.length; j++) {
        if (t[j] === s[i]) {
          dp[i] = j;
          break;
        }

        if (j === t.length - 1) {
          dp[i] = false;
        }
      }
    }
  }

  return Boolean(dp[s.length - 1]) || (dp[s.length - 1] === 0);
};



const tests = [{
  input: ['ahbgdc', 'abc'],
  expected: true,
}, {
  input: ['ahbgdc', 'axc'],
  expected: false,
}, {
  input: ['ahbgdcx', 'acx'],
  expected: true,
}];



tests.forEach(item => {
  let res = isSubsequence(item.input[1], item.input[0]);
  console.log('计算结果: ', res, ', expected: ', item.expected);
});
