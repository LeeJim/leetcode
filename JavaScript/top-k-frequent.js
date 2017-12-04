/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var length = nums.length
  var map = {}

  for (let i = 0; i < length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
  }

  var values = Object.keys(map)
  values.sort((a,b) => map[b] - map[a])
  return values.slice(0, k).map(item => item - 0)
}
