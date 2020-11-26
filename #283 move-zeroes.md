## 暴力解法

```js
var moveZeroes = function(nums) {
    let tail = nums.length - 1

    while(tail >= 0) {
        if (nums[tail] == 0) {
            for (let i = tail; i < nums.length - 1; i++) {
                let tmp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = tmp
            }
        }
        tail--
    }
};
```

## 双指针

```js
var moveZeroes = function(nums) {
    let len = nums.length
    let lastNonZeroIndex = 0
    let swap = (x, y) => {
        let tmp = nums[x]
        nums[x] = nums[y]
        num[y] = tmp
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            swap(lastNonZeroIndex++, i)
        }
    }
}
```