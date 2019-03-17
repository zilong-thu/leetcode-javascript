/**
 * 4 sum
 * Given an array nums of n integers and an integer target,
 * are there elements a, b, c, and d in nums such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  const res = [];
  const map = {};

  if (len <=3) {
    return res;
  }

  for (var i = 0; i < len - 3; i++) {
    for (var j = len - 1; j >= 3; j--) {
      for (var m = i + 1; m < j - 1; m++) {
        let n = j - 1;
        // 0 3 4 5
        while(m < n) {
          if (nums[i] + nums[m] + nums[n] + nums[j] === target) {
            key = [nums[i], nums[m], nums[n], nums[j]].join(',');
            if (!map[key]) {
              map[key] = true;
              res.push([nums[i], nums[m], nums[n], nums[j]]);
            }
          }
          n--;
        }
      }
    }
  }

  console.log(map);

  return res;
};

var tests = [{
  nums: [ -2, -1, 0, 0, 1, 2 ],
  target: 0,
}, {
  nums: [0,0,0,0],
  target: 0,
}, {
  nums: [-2,0,1,1,2],
  target: 1,
}, {
  nums: [-3,-2,-1,0,0,1,2,3],
  target: 0,
}];

tests.forEach(item => {
  var res = fourSum(item.nums, item.target);
  console.log(`\n${res.length}个解：`);
  console.log(res);
});
