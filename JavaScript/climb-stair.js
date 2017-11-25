/*
  You are climbing a stair case. It takes n steps to reach to the top.

  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var memo = new Array(n+1)
  var climb = function(i, n) {
    if (i > n) {
      return 0
    }
    if (i === n) {
      return 1
    }
    if (memo[i] > 0) {
      return memo[i]
    }
    memo[i] = climb(i+1, n) + climb(i+2, n)
    return memo[i]
  }
  return climb(0, n)
}

console.log(climbStairs(2))
console.log(climbStairs(3))