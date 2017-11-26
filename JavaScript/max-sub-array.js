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

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([1]))
// console.log(maxSubArray([-2,1]))
console.log(maxSubArray([-1,0,-2]))
