/*
  Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  var createBST = function (start, end) {
    if (start > end ) return null
    var middle = Math.floor((start + end) / 2)
    var node = new TreeNode(nums[middle])
    node.left = createBST(start, middle - 1)
    node.right = createBST(middle + 1, end)
    return node
  }
  return createBST(0, nums.length - 1)
}
