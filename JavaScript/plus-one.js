/*
  Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

  You may assume the integer do not contain any leading zero, except the number 0 itself.

  The digits are stored such that the most significant digit is at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var n = digits.length
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }
  digits.unshift(1)
  return digits
}

console.log(plusOne([1,9,9]))
console.log(plusOne([9,9,9]))