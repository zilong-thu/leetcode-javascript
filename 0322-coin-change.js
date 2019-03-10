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
