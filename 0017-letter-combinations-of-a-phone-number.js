/**
 * 17. Letter Combinations of a Phone Number
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }

  if (digits.length === 1) {
    return map[digits[0]];
  }

  const arr = digits.split('');

  const firstChar = arr[0];
  const left  = map[firstChar];
  const right = letterCombinations(arr.slice(1).join(''));

  let res = [];
  for (var i = 0; i < left.length; i++) {
    for (var j = 0; j < right.length; j++) {
      res.push(left[i] + right[j]);
    }
  }

  return res;
};


var tests = [{
  digits: '23',
}, {
  digits: '234',
}, {
  digits: '2',
}, {
  digits: '',
}];

tests.forEach(item => {
  var res = letterCombinations(item.digits);
  console.log(res);
});
