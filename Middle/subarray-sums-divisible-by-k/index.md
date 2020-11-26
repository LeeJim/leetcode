### 解题思路

> 首先，本题思路是结合很多答案的智慧结晶。主要为了避免前面答题的比较难理解的预设条件`record[0] = 1`。希望大家看完本题解法，再去理解会比较容易明白

首先，连续子数组的问题，可以优先考虑 **前缀和** 来解决。

### 前缀和的作用

当Input: `A = [4, 5, 0, -2, -3, 1]` `k=5`

**前缀和(设为P)** 可以理解成以数组首位(此时为`4`)为起点的子数组之和

因此 `P` = `[4, 4+5, 4+5+0, ...]` = `[4, 9, 9, 7, 4, 5]`

通过这个`P`的各项相减，我们可以得到任意子数组之和，比如：

获取`[0]`这个子数组之和（设为`sum([0])`)，可以通过`sum([4,5,0]) - sum([4,5])`

同理，`sum([5, 0]) = sum([4, 5, 0]) - sum([4])`

![untitled.png](https://pic.leetcode-cn.com/415d704c9fc8a5f1954c8d42a2a70e65035cc41595023d2f22e0dec3b7449516-untitled.png)

**因此可以得出结论**，前缀和的后项减前项可以得到任意子数组之和。

### 题意理解

元素之和能被K整数的子数组的数目。其中子数组的元素和可以理解成`sum(subArray) % k == 0`

而`sum(subArray) = P[x] - P[y]`，其中`x > y`

等同于 `(P[x] - P[y]) % k == 0`

通过 同余定理，可得 `P[x] % k == P[y] % k`

所以，题目的问题转换成了，找到前缀和除K的余数相同的排列组合数。

### 代码

```javascript
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
    let record = new Array(K).fill(0)
    // record[0] = 1
    let account = 0
    let sum = 0

    for (let num of A) {
        sum += num
        let sumModK = (sum % K + K) % K // 由于sum % k 可能小于0
        if (sumModK == 0) account++ // 当前前缀和也是子数组和之一，因此需另外加一
        account += record[sumModK]
        record[sumModK] ++
    }
    return account
};
```