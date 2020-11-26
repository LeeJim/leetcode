# 回文链表

请判断一个链表是否为回文链表。

示例 1:

>输入: 1->2
输出: false

示例 2:

>输入: 1->2->2->1
输出: true

## 暴力

```js
var isPalindrome = function(head) {
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    for(let len = arr.length, i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - i - 1]) return false
    }
    return true
};
```

## 递归

> 如果使用递归反向迭代节点，同时使用递归函数外的变量向前迭代，就可以判断链表是否为回文。

```js

```