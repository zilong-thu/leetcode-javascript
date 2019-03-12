/**
 * 322. Coin Change
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = (function() {
  var cache = {};
  return function(coins, amount) {
    if (coins.length < 1) {
      return -1;
    }

    if (amount < 1) {
      return -1;
    }

    if (cache[amount]) {
      return cache[amount];
    }

    let min = -1;
    for (var i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const subAmount = amount - coin;
      if (subAmount > 0) {
        let newMin = coinChange(coins, subAmount);
        if (newMin > 0 && min === -1) {
          min = newMin + 1;
        }
        if (newMin > 0) {
          min = Math.min(newMin + 1, min);
        }
      } else if (subAmount === 0) {
        min = 1;
      }
    }

    cache[amount] = min;
    return min;
  }
})();


/**
 * bottom-up method
 */
var coinChange2 = (function() {
  return function(coins, amount) {
    var list = new Array(amount + 1);
    list.fill(Number.MAX_VALUE - 1);
    list[0] = 0;

    for (var i = 1; i <= amount; i++) {
      for (var j = 0; j < coins.length; j++) {
        if (i >= coins[j]) {
          list[i] = Math.min(list[i - coins[j]] + 1, list[i]);
        }
      }
    }

    return list[amount] === Number.MAX_VALUE - 1 ? -1 : list[amount];
  }
})();


var test = [{
  coins: [2],
  amount: 3,
}, {
  coins: [1, 2, 5],
  amount: 11,
}, {
  coins: [1, 5, 10, 25],
  amount: 36,
}];

test.forEach(item => {
  var res = coinChange(item.coins, item.amount);
  console.log(res);
});
