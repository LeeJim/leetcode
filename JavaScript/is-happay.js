/*
  Write an algorithm to determine if a number is "happy".

  A happy number is a number defined by the following process: 

  Starting with any positive integer, replace the number by the sum of the squares of its digits, 
  and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
  Those numbers for which this process ends in 1 are happy numbers.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = {}
    var slice = number => (number + '').split('')
    var pow = array => array.reduce((a, b) => a + Math.pow(b - 0, 2), 0)
    do {
      map[n] = true
      n = pow(slice(n))
    }
    while (!(n in map) && n !== 1)
    return n === 1
}
