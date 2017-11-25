/*
  Say you have an array for which the i-th element is the price of a given stock on day i.

  If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var length = prices.length
  var max = 0

  for (let i = 0; i < length; i++) {
    var buyPrice = prices[i]
    for (let j = i + 1; j < length; j++) {
      if ((prices[j] - buyPrice) > max) {
        max = prices[j] - buyPrice
      }
    }
  }
  return max
}
