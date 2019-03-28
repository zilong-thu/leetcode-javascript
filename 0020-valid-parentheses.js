/**
 * 20. Valid Parentheses
 */

/**
 * @param {string} s
 * @return {boolean}
 */
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
  return (a === '(' && b === ')')
      || (a === '{' && b === '}')
      || (a === '[' && b === ']');
}


const tests = [{
  str: "()",
}, {
  str: "()[]{}",
}, {
  str: "(]",
}, {
  str: "([)]",
}, {
  str: '{[]}'
}];
tests.forEach(item => {
  var res = isValid(item.str);
  console.log(res);
});
