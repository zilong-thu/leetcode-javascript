/**
 * 32. Longest Valid Parentheses
 */

/**
 * @param {string} s
 * @return {number}
 * using stack
 */
var longestValidParentheses = function(s) {
  let max = 0;
  let stack = [];

  for (var i = 0; i < s.length; i++) {
    const ele = s[i];

    if (stack.length === 0 && ele === ')') {
      continue;
    }

    if (ele === '(') {
      stack.push(i);
    }

    if (ele === ')' && stack.length > 0) {
      stack.pop();
      max += 2;
    }
  }

  return max;
};


/**
 * using dp
 */

var longestValidParenthesesDP = function(s) {
  let max = 0;
  let dp = new Array(s.length).fill(0);

  for (var i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      dp[i] = 0;
    }

    if ((s[i] === ')') && (s[i - 1] === '(')) {
      let left = i - 2 >= 0 ? dp[i - 2] : 0;
      dp[i] = left + 2;
    }

    if ((s[i] === ')') && (s[i - 1] === ')')) {
      let x = i - dp[i - 1] - 1;
      if (x >= 0 && s[x] === '(') {
        let left = x - 1 >= 0 ? dp[x - 1] : 0;
        dp[i] = dp[i - 1] + left + 2;
      } else {
        dp[i] = 0;
      }
    }

    max = Math.max(max, dp[i]);
  }

  return max;
};

let tests = [{
  s: "()"
}, {
  s: "(()",
}, {
  s: ")()())"
}, {
  s: "(()())"
}, {
  s: "(()()))))())"
}];

tests.forEach(item => {
  var res = longestValidParenthesesDP(item.s);
  console.log(res);
});
