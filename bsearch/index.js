function bsearch(nums, value) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log('low', low, 'high', high);
        if (nums[mid] <= value) {
            low++;
        } else {
            high--;
        }
    }
    if (nums[high] == value) return high;
    return -1;
}

let ans = bsearch([1,2,4,6,6,6,8,10,10,10,10], 10)
console.log(ans);