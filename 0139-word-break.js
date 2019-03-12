/**
 * word-break
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const L = s.length;
  const dp = new Array(L + 1).fill(false);
  const set = new Set(wordDict);
  dp[0] = true;

  for (var i = 1; i < L + 1; i++) {
    for (var j = 0; j <= i; j++) {
      const sub = s.substring(j, i);
      if (dp[j] && set.has(sub)) {
        dp[i] = true;
      }
    }
  }

  return dp[L];
};

const tests = [{
  s: 'leetcode',
  wordDict: ["leet", "code"],
}, {
  s: 'applepenapple',
  wordDict: ["apple", "pen"],
}, {
  s: 'catsandog',
  wordDict: ["cats", "dog", "sand", "and", "cat"],
}];

tests.forEach(item => {
  console.log(wordBreak(item.s, item.wordDict));
});
