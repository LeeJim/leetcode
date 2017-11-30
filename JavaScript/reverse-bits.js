/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var m = 0
  for (let i = 0; i < 32; i++) {
    if (n & 1 << i) {
      m = m | 1 << (31-i)
    }
  }
  return m < 0 ? m + Math.pow(2, 32) : m
}

console.log(reverseBits(0))
console.log(reverseBits(1))
