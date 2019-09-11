/**
 * 01-奇偶数分离
 * 将数组里的奇偶数分离开，前面是奇数，后面是偶数
 */

var arr = [1, 8, 3, 10, 22, 9];
var arr2 = [1,2,3,4,5,6,7];

// 是偶数
var isEven = val => val % 2 === 0;

// 是奇数
var isOdd = val => val % 2 === 1;

var hasOdd = (arr, i) => {
  let res = false;
  for (var j = i; j < arr.length; j++) {
    if (isOdd(arr[j])) {
      res = true;
    }
  }
  return res;
}

function split(arr) {
  const len = arr.length;
  let i = 0;
  while (i < len - 1) {
    if (isEven(arr[i]) && hasOdd(arr, i)) {
      const current = arr[i];
      for (let j = i; j < len - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[len - 1] = current;
    } else {
      i++;
    }
  }
}

split(arr2);
console.log(arr2);
