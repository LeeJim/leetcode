/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * O(n) time, O(n) space
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  var length = arr.length
  if (length <= 1) return true
  for (let i = 0; i < length / 2; i++) {
    if (arr[i] != arr[length-i-1]) {
      return false
    }
  }
  return true
}

/* O(n) time, O(1) space */
var isPalindrome = function(head) {
  if (!head) return true
  var node = head

  while (node.next) {
    node.next.pre = node
    node = node.next    
  }

  var tailing = node

  while (head) {
    if (head.val != tailing.val) return false
    head = head.next
    tailing = tailing.pre
  }
  return true
}
