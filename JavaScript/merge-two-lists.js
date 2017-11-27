/*
  Merge two sorted linked lists and return it as a new list. 
  The new list should be made by splicing together the nodes of the first two lists.
 */

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var newList = new ListNode(null)
  var head = newList
  while (l1 || l2) {
    if (l1 == null) {
      newList.next = new ListNode(l2.val)
      l2 = l2.next
    } else if (l2 == null) {
      newList.next = new ListNode(l1.val)
      l1 = l1.next
    } else if (l1.val < l2.val) {
      newList.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      newList.next = new ListNode(l2.val)
      l2 = l2.next
    }
    newList = newList.next
  }
  return head.next
}

var mergeTwoLists1 = function(l1, l2) {
  var newList = new ListNode(null)
  var head = newList
  while (l1 && l2) {
    if (l1.val < l2.val) {
      newList.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      newList.next = new ListNode(l2.val)
      l2 = l2.next
    }
    newList = newList.next
  }
  newList.next = l1 ? l1 : l2
  return head.next
}

var mergeTwoLists2 = function(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists2(l2.next, l1)
    return l2
  }
}

var l1 = new ListNode(1)
l1.next = new ListNode(3)
l1.next.next = new ListNode(5)

var l2 = new ListNode(2)
l2.next = new ListNode(4)
l2.next.next = new ListNode(6)

console.log(mergeTwoLists2(l1, l2))

