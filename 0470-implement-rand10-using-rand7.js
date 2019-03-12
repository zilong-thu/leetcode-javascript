function F() {
  return Math.ceil(Math.random() * 3);
}

function X1() {
  switch (F()) {
    case 1:
      return F();
      break;
    case 2:
      return F() + 3;
    case 3:
      switch (F()) {
        case 1:
          return 7;
          break;
        default:
          return X();
      }
      break;
  }
}

function X2() {
  var val = (F() - 1) * 3 + F();
  if (val < 8) {
    return val % 7 + 1;
  } else {
    return X2();
  }
}

var obj = {};
var N = 1000000;

for (var i = 0; i < N; i++) {
  var val = X2();
  if (!obj[val]) {
    obj[val] = 1;
  } else {
    obj[val]++;
  }
}

console.log(obj);
