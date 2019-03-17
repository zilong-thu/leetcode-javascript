/**
 * 84. Largest Rectangle in Histogram
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
 * find the area of largest rectangle in the histogram.
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let max = 0;
  let len = heights.length;
  let widths = [];

  let leftIdxOfHigherElements = [-1];
  let rightIdxOfHigherElements = [];
  rightIdxOfHigherElements[len - 1] = len;

  for (var i = 1; i < len; i++) {
    let left = i - 1;
    let h = heights[i];

    while (left >= 0 && heights[left] >= heights[i]) {
      left = leftIdxOfHigherElements[left];
    }

    leftIdxOfHigherElements[i] = left;
  }

  for (var j = len - 2; j >= 0; j--) {
    let right = j + 1;

    while (right < len && heights[right] >= heights[j]) {
      right = rightIdxOfHigherElements[right];
    }

    rightIdxOfHigherElements[j] = right;
  }

  for (var i = 0; i < len; i++) {
    let h = heights[i];
    const w = rightIdxOfHigherElements[i] - leftIdxOfHigherElements[i] - 1;
    max = Math.max(max, w * h);
  }
  return max;
};

const tests = [{
  heights: [2,1,5,6,2,3],
}, {
  heights: [2],
}, {
  heights: [2, 1, 2],
}];
tests.forEach(item => {
  var res = largestRectangleArea(item.heights);
  console.log(res);
});
