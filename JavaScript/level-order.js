/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var array = []
  var inter = function(node, level) {
    if (node == null) return
    if (!array[level]) {
      array[level] = []
    }
    array[level].push(node.val)
    inter(node.left, level+1)
    inter(node.right, level+1)
  }

  inter(root, 0)
  return array
}
