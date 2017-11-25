/*
  Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

  For example,
  Given nums = [0, 1, 3] return 2.

  Note:
  Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber0 = function(nums) {
  let sum = 0
  const length = nums.length

  for (let i = 0; i < length; i++) {
    sum += nums[i]
  }

  return (length*(length+1)/2 - sum)
}

var missingNumber = function(nums) {
  let xor = nums.length
  const length = nums.length

  for (let i = 0; i < length; i++) {
    xor ^= i
    xor ^= nums[i]
  }

  return xor
}
