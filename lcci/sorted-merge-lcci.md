
## 初始版本

```js
var merge = function (A, m, B, n) {
    let last = m + n - 1
    let i = m - 1
    let j = n - 1

    while (last >= 0 && j >= 0) {
        if (A[i] > B[j] && i >= 0) {
            A[last] = A[i]
            i--
        } else {
            A[last] = B[j]
            j--
        }
        last--
    }
};
```

## 优化版本

```js
var merge = function (A, m, B, n) {
    let tail = m + n - 1
    let i = m - 1
    let j = n - 1

    while (j >= 0) {
        if (A[i] > B[j] && i >= 0) {
            A[tail] = A[i]
            i--
        } else {
            A[tail] = B[j]
            j--
        }
        tail--
    }
};
```

## 总结

- 结束标记应该是B是否完全拷贝到A，因此初始版本`last >= 0`冗余
- 尾部索引的命名使用`tail`会优于`last`
- 看过官方的解法，存在个问题：当B拷贝完之后，任然继续在A原位赋值，是多余的