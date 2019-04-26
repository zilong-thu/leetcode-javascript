/**
 * 22. Generate Parentheses
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let str = generate(n).filter(item => isValid(item));
  return str;
};

function generate(n) {
  if (n === 1) {
    return ['()'];
  }

  let res = generate(n - 1).map(item => item + ')');
  return res;
}


var isValid = function(s) {
  var stack = [];

  if (!s) {
    return true;
  }

  if (s.length === 1) {
    return false;
  }

  stack.push(s[0]);

  for (var i = 1; i < s.length; i++) {
    if (isPair(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};

function isPair(a, b) {
  return a === '(' && b === ')';
}

let tests = generateParenthesis(3);
console.log(tests);
