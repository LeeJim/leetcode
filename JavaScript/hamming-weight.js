/*
  Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

  For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0

  for (let i = 0; i < 32; i++) {
   if (n & 1 << i) count++
  }

  return count
};
