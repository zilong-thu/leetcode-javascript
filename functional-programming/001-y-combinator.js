
const param = (f) =>
  (n) =>
    n === 0 || n === 1 ? 1 : f(n - 1) + f(n - 2);

function Y(func) {
  return (n) =>
}

const fibonacci = Y(param);

let res1 = fibonacci(3);
console.log(res1);
