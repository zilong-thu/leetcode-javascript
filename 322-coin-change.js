var coinChange = function(coins, amount) {
  var list = [];
  var i = 0;
  // 大的硬币在前面
  coins = coins.sort((a, b) => b - a);
  while(amount > 0 && i < coins.length) {
    if (coins[i] <= amount) {
      let count = Math.floor(amount / coins[i]);
      list = list.concat(new Array(count).fill(coins[i]));
      amount = amount % coins[i];
    }
    i++;
  }
  console.log(amount, list);

  if(amount !== 0) {
    return -1;
  } else {
    return list.length;
  }
};

var tests = [{
    coins: [1, 2, 5],
    amount: 11
  }, {
    coins: [2],
    amount: 3
  }, {
    coins: [1],
    amount: 2,
  }, {
    coins: [186,419,83,408],
    amount: 6249,
  }];

tests.forEach(item => {
  console.log(coinChange(item.coins, item.amount));
});
