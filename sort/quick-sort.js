function partition(nums, left ,right) {
    let pivot = nums[right]
    let i = left
    for (let j = left; j < right; j++) {
        if (nums[j] < pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]]
    return i;
}

function quickSort(nums, left, right) {
    if (left >= right) return
    let index = partition(nums, left, right)
    console.log(nums);
    quickSort(nums, left, index-1)
    quickSort(nums, index + 1, right)
    return nums
}

let arr = [6, 11, 3, 9, 8 ]
quickSort(arr, 0, arr.length - 1)

console.log(arr);
