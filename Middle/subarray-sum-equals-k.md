```js
var subarraySum = function(nums, k) {
    let record = new Map()
    let sum = 0
    let count = 0

    for(let n of nums) {
        sum += n
        if (sum == k) count++
        count += record.get(sum - k) || 0
        record.set(sum, (record.get(sum) || 0) + 1)
    }
    return count
};
```