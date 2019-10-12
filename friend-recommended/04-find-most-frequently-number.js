/**
 * 找出数组中超过一半的那个数字
 * 对应 leetcode 169 题
 * https://leetcode.com/problems/majority-element/submissions/
 */


var find = function(arr) {
  arr = arr || [];

  let obj = {};
  let maxCount = 0;
  let maxValue = 0;

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }

    if (obj[val] > maxCount) {
      maxCount = obj[val];
      maxValue = val;
    }
  }

  return maxValue;
}


var tests = [{
  input: [3,6,5,6,2,6,5,6,6],
  expected: 6,
}, {
  input: [2, 2, 2, 3, 3, 4, 5, 4, 4, 4, 4, 4, 4],
  expected: 4,
}, {
  input: [3,2,3],
  expected: 3,
}];

tests.forEach(item => {
  var res = find(item.input);
  console.log('res: ', res, ', expected: ', item.expected);
})
