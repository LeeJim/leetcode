/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0

  var length = nums.length
  var i = 0

  for (let j = 1; j < length; j++) {
    if (nums[i] != nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}
