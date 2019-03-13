/**
 * 3Sum
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * Note:
 * The solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumUsing2Sum = function(nums) {
  var result = [];
  var resultValueObj = {};

  for (var i = 0; i < nums.length; i++) {
    var obj = {};
    var target = Number(-1 * nums[i]);
    var res = [];

    for (var j = 0; j < nums.length; j++) {
      if (i !== j) {
        var me = nums[j];
        var ta = target - me;
        if (obj[ta] !== undefined) {
          res = [nums[obj[ta]], nums[j], nums[i]];
          res.sort((a, b) => a - b);
          var keyOfValue = res.join(',');
          if (!resultValueObj[keyOfValue]) {
            result.push(res);
            resultValueObj[keyOfValue] = true;
          }
        } else {
          obj[me] = j;
        }
      }
    }
  }

  return result;
};


var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  var res = [];

  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return res;
    }

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    for (var j = i + 1, k = nums.length - 1; j < k;) {
      var sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([i, j, k].map(index => nums[index]));
        j++;
        k--;
        while(nums[j] === nums[j - 1]) {
          j++;
        }

        while(nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return res;
}


var tests = [{
  nums: [-1, 0, 1, 2, -1, -4],
}, {
  nums: [0,0,0,0],
}, {
  nums: [-2,0,1,1,2]
}];

tests.forEach(item => {
  var res = threeSum(item.nums);
  console.log(res);
});
