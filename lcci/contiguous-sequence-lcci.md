
# 初始版本

```js
var maxSubArray = function(nums) {
    let preSum = []
    let sum = 0
    let len = nums.length
    let max = -Infinity

    for (let i = 0; i < len; i++) {
        sum += nums[i]
        max = sum > max ? sum : max
        preSum[i]= sum
    }

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let val = preSum[j] - preSum[i]
            max = val > max ? val : max
        }
    }

    return max
};
```

## 优化版本

```js
var maxSubArray = function(nums) {
    let sum = nums[0]
    let cur = sum
    let len = nums.length

    for (let i = 1; i < len; i++) {
        let n = nums[i]

        if (cur < 0) {
            cur = n
        } else {
            cur += n
        }

        sum = Math.max(cur, sum)
    }

    return sum
};
```