/**
 * 11. Container With Most Water
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = 0;
  var N = height.length;

  for (var i = 0; i < N - 1; i++) {
    for (var j = i + 1; j < N; j++) {
      var area = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, area);
    }
  }

  return max;
};

var tests = [
  [1,8,6,2,5,4,8,3,7]
];

tests.forEach(item => {
  var res = maxArea(item);
  console.log(res);
});

