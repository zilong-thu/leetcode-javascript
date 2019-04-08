/**
 * 35. Search Insert Position
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var res;
  const len = nums.length;

  if ((len === 0) || (target < nums[0])) {
    return 0;
  }

  if (target === nums[len - 1]) {
    return len - 1;
  }

  for (var i = 0; i < len - 1; i++) {
    if (nums[i] === target) {
      res = i;
      return i;
    } else if (nums[i] < target && target < nums[i + 1])  {
      return i + 1;
    }
  }

  return len;
};

const tests = [{
  arr: [1,3,5,6],
  target: 5,
  expected: 2,
}, {
  arr: [1,3,5,6],
  target: 2,
}, {
  arr: [1,3,5,6],
  target: 7,
}, {
  arr: [1,3,5,6],
  target: 0,
}];

tests.forEach(item => {
  let res = searchInsert(item.arr, item.target);
  console.log(res);
});

