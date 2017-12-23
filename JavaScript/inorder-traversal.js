/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) return []
    
  var res = []
  if (root.left) {
    res.push(...inorderTraversal(root.left))
  }
  res.push(root.val)
  if (root.right) {
    res.push(...inorderTraversal(root.right))
  }
  return res
}
