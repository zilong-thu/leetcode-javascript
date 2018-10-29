/**
 * 这个题表明 JS 是无法完成高精度的浮点数计算的。
 * 因此思路虽然正确，但是无法精确给出结果。
 */
/**
 * Definition for a point.
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

/**
 * @param {Point[]} points
 * @return {number}
 * 一条直线由两个参数即可唯一确定：
 *   ax + by = c;
 * 或者
 *   ax + by = 0
 */
var maxPoints = function(points) {
  if (!points) {
    return 0;
  }
  if (points.length < 3) {
    return points.length;
  }
  /**
   * [lineIDs description]
   * 用于标记当前的组合是否已经建立过一次 i-j 与 j-i 视为同一个组合
   * {
   *   1-2: true,
   *   2-1: true,
   * }
   */
  var lineIDs = {};
  var lineMap = {};

  for (var i = 0; i < points.length; i++) {
    for (var j = i + 1; j < points.length; j++) {
      if (lineIDs[`${i}-${j}`]) {
        continue;
      }

      var p1 = points[i];
      var p2 = points[j];
      if (p1.x === undefined) {
        p1 = {x: p1[0], y: p1[1]};
        p2 = {x: p2[0], y: p2[1]};
      }

      let bD = (p1.y * p2.x - p2.y * p1.x);
      let b = bD === 0 ? 'Infinity' : ((p2.x - p1.x) / bD);
      let a = bD === 0 ? 'Infinity' : ((p1.y - p2.y) / bD);
      let c = 1;

      // 说明过原点
      if (bD === 0) {
        b = -1;
        c = 0;
        if (p1.x !== 0) {
          a = (p1.y / p1.x);
        } else {
          a = (p2.y / p2.x);
        }
      }

      lineIDs[`${i}-${j}`] = true;
      lineIDs[`${j}-${i}`] = true;

      var key = String(a) + '-' + String(b) + '-' + String(c);
      lineMap[key] = lineMap[key] || [];
      lineMap[key].push(i, j);
    }
  }

  var max = 0;
  Object.keys(lineMap).forEach(key => {
    max = Math.max(max, uniqueCount(lineMap[key]));
  });
  console.log(lineIDs)
  console.log(lineMap);
  return max;
};

/**
 * 计算数组唯一元素的个数
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function uniqueCount(arr) {
  var map = {};
  var count = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    var key = arr[i];
    if (!map[key]) {
      map[key] = true;
      count++;
    }
  }

  return count;
}

// var test = uniqueCount([1, 1, 1]);
// console.log('test: ', test);

// var input = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]];
// var input = [[0,0],[1,1],[1,-1]]; // 2
// var input = [[1,1],[2,2],[3,3]];  // 3
// var input = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]];  // 4
var input = [[0,0],[94911151,94911150],[94911152,94911151]];  // 2
var res = maxPoints(input);
console.log(res);
