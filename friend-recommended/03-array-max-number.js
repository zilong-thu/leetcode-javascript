/**
 * 数组中各个元素均为数字，将它们拼成一个尽可能大的数字，并返回
 * [12, 3, 45, 2] => 453212
 * 对应 leetcode 179题，https://leetcode.com/problems/largest-number/
 */


// a 应该在前面，则 a 大
function isBigger(a, b) {
  let val_1 = a + '' + b;
  let val_2 = b + '' + a;

  return val_1 > val_2;
}

function merge(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];
  for (var i = 1; i < arr.length; i++) {
    if (isBigger(arr[i], pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return merge(left).concat([pivot].concat(merge(right)));
}

function removeLeadingZeros(str) {
  if (/^0+$/.test(str)) {
    return '0';
  }
  return str.replace(/^0+([1-9]\d*)$/, '$1');
}

function largestNumber(arr) {
  const sorted = merge(arr);
  let res = removeLeadingZeros(sorted.join(''));
  return res;
}

var tests = [{
  input: [12, 3, 45, 2],
  expected: '453212',
}, {
  input: [6, 3, 45, 2],
  expected: '64532',
}, {
  input: [999999998,999999997,999999999],
  expected: '999999999999999998999999997',
}, {
  input: [0, 0],
  expected: '0',
}];

tests.forEach(item => {
  let res = largestNumber(item.input);
  console.log('期望：', item.expected, '实际计算得到：', res, '结果正确：', res === item.expected);
});

