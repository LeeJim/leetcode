/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var length = nums.length
  var a = new Array(length)

  for (let i = 0; i < length; i++) {
    a[(i + k) % length] = nums[i]
  }
  for (let i = 0; i < length; i++) {
    nums[i] = a[i]
  }
}

rotate([1,2], 1)