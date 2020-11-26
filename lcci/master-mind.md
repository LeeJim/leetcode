
# 初始版本

```js
var masterMind = function(solution, guess) {
    let len = solution.length
    let res = [0, 0]
    let record = new Array(len)
    let skip = new Array(len)

    for (let i = 0; i < len; i++) {
        if (solution[i] == guess[i]) {
            res[0]++
            record[i] = 1
            skip[i] = 1
        }
    }

    for (let i = 0; i < len; i++) {
        let gChar = guess[i]
        if (skip[i] === 1) continue
        for (let j = 0; j < len; j++) {
            if (gChar == solution[j] && record[j] !== 1) {
                res[1]++
                record[j] = 1
                break
            }
        }
    }

    return res
};
```

> 空间复杂度O(n) 算法复杂度O(n2)

## 优化版本

```js
var masterMind = function(solution, guess) {
    let res = [0, 0]
    let record = new Map()
    let total = 0

    for (let i = 0; i < len; i++) {
        let gChar = guess[i]
        if (gChar == solution[i]) { // 猜中
            res[0]++
        } else {  // 伪猜中，颜色的次数
            let val = record.get(gChar) || 0
            record.set(gChar, val + 1)
        }
    }

    for (let i = 0; i < len; i++) {
        let sChar = solution[i]
        if (sChar !== guess[i]) {
            let val = record.get(sChar) || 0
            if (val > 0) {
                res[1]++
                record.set(sChar, --val)
            }
        }
    }

    return res
};
```

> 空间复杂度O(n) 算法复杂度O(n)

## 总结

- “猜中”比较容易计算，而“伪猜中”比较麻烦
- 先统计“伪猜中”中的颜色个数，然后遍历solution统计“伪猜中”即可
- 遍历solution，避免了回溯的麻烦

