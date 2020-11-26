
## 暴力法

```js
var twoSum = function (nums, target) {
    let len = nums.length

    for (let i = 0; i < len; i++) {
        let x = nums[i]
        for (let j = i + 1; j < len; j++) {
            let y = nums[j]
            if (y == target - x) return [i, j]
        }
    }
};
```

## 哈希表

通过空间换时间

```js
var twoSum = function (nums, target) {
    let len = nums.length
    let map = new Map()
    map.set(nums[0], 0)

    for (let i = 1; i < len; i++) {
        let n = nums[i]
        let hit = map.get(target - n)
        if (hit) {
            return [hit, i]
        }
        map.set(n, i)
    }
};
```