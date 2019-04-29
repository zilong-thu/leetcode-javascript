/**
 * 假设 Promise.all 方法没有被运行时实现，请实现一个
 */

// 思路一，把串行执行的方法用循环与Promise 包装起来
Promise.all = function(list) {
  let values = [];
  let p = list[0].then(res => {
    return [res];
  });

  for (let i = 1; i < list.length; i++) {
    p = new Promise((resolve, reject) => {
      let item = list[i];
      p.then(res => {
        item.then(res_i => {
          res[i] = res_i;
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      });
    });
  }

  return p;
}


Promise.all = function(list) {
  let result = [];
  for (var i = 0; i < list.length; i++) {
    let p = list[i];
    // p.then
  }
}



const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

const p = Promise.all([p1, p2, p3]);
p.then(values => {
  console.log(values);
})
