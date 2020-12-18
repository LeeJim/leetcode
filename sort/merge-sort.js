function mergeSort(nums) {
    let n = nums.length
    let ans = new Array(n)
    mergeSortRecursive(nums, ans, 0, n - 1)
}

function mergeSortRecursive(nums, ans, start, end) {
    if (start >= end) return;
    let n = end - start;
    let mid = Math.floor(n / 2) + start;
    mergeSortRecursive(nums, ans, start, mid)
    mergeSortRecursive(nums, ans, mid + 1, end)
    let p = start
    let start1 = start;
    let end1 = mid
    let start2 = mid + 1;
    let end2 = end;
    while(start1 <= end1 && start2 <= end2) {
        ans[p++] = nums[start1] < nums[start2] ? nums[start1++] : nums[start2++]
    }
    while (start1 <= end1) {
        ans[p++] = nums[start1++]
    }
    while (start2 <= end2) {
        ans[p++] = nums[start2++]
    }
    for(p = start; p <= end; ++p) {
        nums[p] = ans[p]
    }
}

let test1 = [1,3,5,2,4]
mergeSort(test1)
console.log(test1);