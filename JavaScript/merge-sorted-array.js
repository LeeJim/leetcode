/*
  Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var size = m + n
  let i = 0, j = 0;

  while (m < size) {
    if (i === m) {
      nums1[i++] = nums2[j++]
      m++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      for (let k = m - 1; k >= i; k--) {
        nums1[k+1] = nums1[k]
      }
      nums1[i] = nums2[j]
      j++
      m++
    }
  }
}

var merge1 = function(nums1, m, nums2, n) {
  var i = m - 1
  var j = n - 1
  var k = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--]
    } else {
      nums1[k] = nums2[j--]
    }
    k--
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
}
