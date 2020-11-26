# find-all-numbers-disappeared-in-an-array

## 初始版本

```js
var findDisappearedNumbers = function(nums) {
    let len = nums.length
    let counter = new Array(len).fill(0)
    let res = []

    for (let n of nums) {
        counter[n-1] = 1
    }

    for (let i = 0; i < len; i++) {
        if (counter[i] == 0) {
            res.push(i+1)
        }
    }

    return res
};
```

## 优化版本

```js
var findDisappearedNumbers = function(nums) {
    let result = []

    for (let n of nums) {
        n = Math.abs(n) - 1
        if (nums[n] > 0) nums[n] = -nums[n]
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) result.push(i + 1)
    }

    return result
}
```