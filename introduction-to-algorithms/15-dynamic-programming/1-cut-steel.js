/**
 * 钢条切割问题，满足最优子结构性质：问题的最优解由相关子问题的最优解组合而成，而这些子问题可以独立求解。
 * 这样的问题可以使用递归。
 */

const p = [
  0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30,
  // 32, 35, 37, 39, 40, 43, 46, 49, 50, 55,
  // 58, 60, 62, 65, 67, 69, 70, 73, 74, 76,
];

/**
 * 这里加入一个对象 cache，对已知的子问题的解进行缓存，可以大大减少输入规模 n 变大时候的计算时间
 * => 即所谓的带备忘的自顶向下法（top-down with memoization）
 */
const cutRod = (function() {
  const cache = {};
  return function (p, n) {
    if (n === 0) {
      return 0;
    }

    let q = 0;

    if (cache[n]) {
      return cache[n];
    }

    for (var i = 1; i <= n; i++) {
      q = Math.max(q, p[i] + cutRod(p, n - i));
    }

    cache[n] = q;
    return q;
  };
})();

/**
 * 自底向上的解法
 * @param  {[type]} ) {})(        [description]
 * @return {[type]}   [description]
 */
const cutRodBottomUp = (function() {
  let r = [0];
  let s = [];
  return function(p, n) {
    for (var i = 1; i <= n; i++) {
      let q = 0;
      for (var j = 1; j <= i; j++) {
        if (q < p[j] + r[i - j]) {
          q = p[j] + r[i - j];
          s[i] = j;
        }
      }
      r[i] = q;
    }
    return {
      max: r[n],
      rule: s,
    };
  };
})();

console.time('cutRod');
const N = 30;
for (var i = 1; i <= N; i++) {
  let res = cutRodBottomUp(p, i);
  console.log(`长度为${i}的钢条，最大收益为：`, res.max);
  console.log(`切割方法为：`, res.rule);
}
console.timeEnd('cutRod');
