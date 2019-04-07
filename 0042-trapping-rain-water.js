/**
 * 42. Trapping Rain Water
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let len = height.length;
  if (len == 0) {
    return 0;
  }

  let sum = 0;
  let leftMaxArr = [];
  let rightMaxArr = [];

  leftMaxArr[0] = height[0];
  rightMaxArr[len - 1] = height[len - 1];

  for (var i = 1; i < len; i++) {
    leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i]);
  }

  for (var i = len - 2; i >= 0; i--) {
    rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i]);
  }
  
  for (var i = 0; i < len; i++) {
    let area = Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
    sum += area;
  }

  // console.log(leftMaxArr, rightMaxArr);
  // console.log(leftMaxArr.length, rightMaxArr.length);

  return sum;
};


const tests = [{
  str: [0,1,0,2,1, 0,1,3,2,1, 2,1],
  expected: 6,
}];

tests.forEach(item => {
  var res = trap(item.str);
  console.log(res);
});