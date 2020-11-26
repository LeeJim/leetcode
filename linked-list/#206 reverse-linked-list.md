# 反转链表

> 反转一个单链表。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

## 迭代版本

v1
```js
var reverseList = function(head) {
    if (!head || !head.next) return head
    let prev = head
    let curr = head.next
    while(curr) {
        let tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    }
    head.next = null
    return prev
};
```

v2
```js
var reverseList = function(head) {  
    let prev = null
    let curr = head
    while(curr) {
        let tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    }
    return prev
};
```

## 递归版本
```js
var reverseList = function(head) {
    if (!head || !head.next) return head
    
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
};
```
