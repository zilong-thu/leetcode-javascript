/**
 * 41. First Missing Positive
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums.length === 0) {
    return 1;
  }

  // 从低到高排序
  nums = nums.map(i => i).sort((a, b) => (a - b));

  // ① 最大的数字非正数，则返回1
  if (nums[nums.length - 1] <= 0) {
    return 1;
  }

  // 去掉非正数
  nums = nums.filter(i => i > 0);

  // ② 去掉非正数后，第一个元素大于1，则返回1
  if (nums[0] > 1) {
    return 1;
  }

  let len = nums.length;

  for (var i = 0; i < nums.length; i++) {
    let j = nums[i] + 1;
    if (nums[i + 1] > j) {
      return j;
    }
  }

  return nums[len - 1] + 1;
};


const tests = [{
  arr: [7,8,9,11,12],
  res: 1,
}, {
  arr: [3,4,-1,1],
  res: 2,
}, {
  arr: [1,2,0],
  res: 3,
}];

tests.forEach(item => {
  var res = firstMissingPositive(item.arr);
  console.log(res);
});
