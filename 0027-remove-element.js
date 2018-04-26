/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0;

  while (nums[i] !== undefined) {
    if (nums[i] === val) {
      var len = nums.length;
      nums[i] = nums[len - 1];
      nums.length = len - 1;
    } else {
      i++;
    }
  }

  return nums.length;
};

var nums = [3,2,2,3];
var val = 3;

var res = removeElement(nums, val);
console.log(res);
