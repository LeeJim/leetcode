/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false
  var node = head.next
  var lists = [head]
  while (node !== null) {
    if (lists.includes(node)) return true
    lists.push(node)
    node = node.next
  }
  return false
}
