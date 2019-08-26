/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) {
    return 0;
  }

  var maxProfit = 0;
  var minVal = prices[0];

  for (var i = 0; i < prices.length; i++) {
    let val = prices[i];

    if (val < minVal) {
      minVal = val;
    } else if (val - minVal > maxProfit) {
      maxProfit = val - minVal;
    }
  }

  return maxProfit;
};
