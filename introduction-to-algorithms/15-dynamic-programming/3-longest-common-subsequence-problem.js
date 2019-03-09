/**
 * 15.4 最长公共子序列问题
 * Longest Common Subsequence Problem
 */

const X = ['A', 'B', 'C', 'B', 'D', 'A', 'B'];
const Y = ['B', 'D', 'C', 'A', 'B', 'A'];

function LCSLength(X, Y) {
  const c = {};
  const b = {};
  for (var i = 1; i <= X.length; i++) {
    c[`${i},0`] = 0;
  }
  for (var i = 1; i <= Y.length; i++) {
    c[`0,${i}`] = 0;
  }
  for (var i = 1; i <= X.length; i++) {
    for (var j = 1; j <= Y.length; j++) {
      if (X[i - 1] === Y[j - 1]) {
        c[`${i},${j}`] = c[`${i - 1},${j - 1}`] + 1;
        b[`${i},${j}`] = X[i - 1];
      } else if (c[`${i},${j - 1}`] >= c[`${i - 1},${j}`]) {
        c[`${i},${j}`] = c[`${i},${j - 1}`];
        b[`${i},${j}`] = -1;
      } else {
        c[`${i},${j}`] = c[`${i - 1},${j}`];
        b[`${i},${j}`] = 1;
      }
    }
  }

  return {b, c};
}

const res = LCSLength(X, Y);
// console.log(res.c);

function printLCS(b, X, i, j) {
  if (i === 0 || j === 0) {
    return;
  }

  const _b = b[`${i},${j}`];
  if (typeof _b === 'string') {
    printLCS(b, X, i - 1, j - 1);
    console.log(_b);
  } else if (_b === -1) {
    printLCS(b, X, i, j - 1);
  } else {
    printLCS(b, X, i - 1, j);
  }
}

printLCS(res.b, X, X.length, Y.length);

