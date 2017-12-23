/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var len = nums.length
  var res = new Array(len)
  var i = 1
  res[0] = 1

  for (; i < len; i++) {
    res[i] = res[i-1] * nums[i-1]
  }
  var right = 1
  for (i = len - 1; i >= 0; i--) {
    res[i] *= right
    right *= nums[i]
  }
  return res
}
