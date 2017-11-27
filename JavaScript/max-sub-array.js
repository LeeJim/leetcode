/*
  Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

  For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
  the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var length = nums.length
    var max = nums[0]
    for (let i = 0; i < length; i++) {
      var sum = nums[i]
      if (sum > max) max = sum
      for (let j = i + 1; j < length; j++) {
        sum += nums[j]
        if (sum > max) max = sum
      }
    }
    return max
}

var maxSubArray1 = function(nums) {
  var length = nums.length
  var dp = new Array(length)
  var max = nums[0]

  dp[0] = nums[0]

  for (let i = 1; i < length; i++) {
    dp[i] = nums[i] + (dp[i-1] > 0 ? dp[i-1] : 0)
    max = Math.max(dp[i], max)
  }

  return max
}

console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray1([1]))
console.log(maxSubArray1([-2,1]))
console.log(maxSubArray1([-1,0,-2]))
