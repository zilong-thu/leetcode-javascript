/**
 * In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
 * Return the element repeated N times.
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  var ele;
  var map = {};

  for (var i = 0; i < A.length; i++) {
    var key = A[i];
    if (!map[key]) {
      map[key] = 1;
    } else {
      map[key] += 1;
      ele = key;
      break;
    }
  }

  return ele;
};
