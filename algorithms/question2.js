function ListNode(val) {
  this.val = val;
  this.next = null;
}


// edition #0

var addTwoNumbers = function(l1, l2) {
    var head = new ListNode( (l1.val + l2.val) % 10 )
    var up = l1.val + l2.val >= 10
    var node = head
    while(l1.next || l2.next || up) {
        if (l1.next || l2.next) {
            l1 = l1.next || {val: 0}
            l2 = l2.next || {val: 0}
            node.next = new ListNode( (l1.val + l2.val + (up && 1)) % 10 )
            node = node.next
            up = l1.val + l2.val + (up && 1) >= 10
        }
        else {
            node.next = new ListNode(1)
            up = false
        }
    }
    return head
};

// edition #1

var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0)
    var p = l1, q = l2
    var carry = 0
    var curr = head

    while(p || q) {
        var x = p ? p.val : 0
        var y = q ? q.val : 0
        var sum = x + y + carry
        carry = sum / 10
        curr.next = new NodeList(sum)
        curr = curr.next
        p = p ? p.next : null
        q = q ? q.next : null
    }

    if (carry) {
        curr.next = new NodeList(carry)
    }

    return head.next
}