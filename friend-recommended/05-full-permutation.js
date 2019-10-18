/**
 * 对数组进行全排列
 * 对应 leetcode 46 题
 */

function permutation(arr) {
  const first = arr[0];
  let res = [];

  if (arr.length === 2) {
    return [
      [arr[0], arr[1]],
      [arr[1], arr[0]],
    ];
  }

  if (arr.length <= 1) {
    return [arr];
  }

  const asideTheFirst = [];
  for (var i = 1; i < arr.length; i++) {
    asideTheFirst.push(arr[i]);
  }

  const leftPermutation = permutation(asideTheFirst);
  for (var i = 0; i < leftPermutation.length; i++) {
    const itemArr = leftPermutation[i];
    for (var j = 0; j < itemArr.length; j++) {
      const newItemArr = itemArr.map(e => e);
      newItemArr.splice(j, 0, first)
      res.push(newItemArr);
    }
    res.push(itemArr.concat([first]));
  }

  return res;
}

var tests = [{
  input: [1, 2, 3],
  expected: 6,
}, {
  input: [1, 2, 3, 4],
  expected: 24,
}];

tests.forEach(item => {
  var res = permutation(item.input);
  console.log('计算结果: ', res, res.length, '种排列方式', ', expected: ', item.expected, '个排列方式');
})
