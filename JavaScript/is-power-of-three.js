/*
  Given an integer, write a function to determine if it is a power of three.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 1) {
    return false
  }
  while (n % 3 === 0) {
    n = Math.floor(n / 3)
  }
  return n === 1
};

var assert = require('assert')

for(let i = 0; i < 100; i++) {
  if (isPowerOfThree(i)) {
    console.log(i)
  }
}
