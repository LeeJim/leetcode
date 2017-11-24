/*
  Given an array of integers, find if the array contains any duplicates.
  Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.length !== [...new Set(nums)].length
}

// 利用哈希表来实现 时间复杂度O(n) 空间复杂度O(n)
var containsDuplicate1 = function(nums) {
  var length = nums.length
  var obj = {}
  for (let i = 0; i < length; i++) {
    if (nums[i] in obj) return true
    obj[nums[i]] = 1
  }
  return false
}

// 先排序再查找 时间复杂度O(NlgN) 空间复杂度O(1)-忽略排序所占的空间
var containsDuplicate2 = function(nums) { 
  var length = nums.length
  nums = nums.sort()
  for (let i = 1; i < length; i++) {
    if (nums[i] === nums[i-1]) return true
  }
  return false
}
