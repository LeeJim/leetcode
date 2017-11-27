/*
  Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  var isMirror = function(n1, n2) {
    if (n1 == null && n2 == null) return true
    if (n1 == null || n2 == null) return false

    return n1.val === n2.val
      && isMirror(n1.left, n2.right)
      && isMirror(n1.right, n2.left)
  }
  return isMirror(root, root)
}

var root = new TreeNode(1)
root.left  = new TreeNode(2)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.right.right = new TreeNode(3)

console.log(isSymmetric(root))
