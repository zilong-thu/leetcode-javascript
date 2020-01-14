var curry = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error('should be a function!');
  }

  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function() {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      }
    }

    return fn.apply(null, args);
  };
}


function multiply(x, y, z) {
  return x * y * z;
}

var a = curry(multiply)(3)(2)(1);
console.log(a);
