/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var arr = [...this.original]
    var len = arr.length
    
    
    for (let i = 0; i < len; i++) {
        var index = Math.floor(Math.random() * len)
        var tmp = arr[i]
        arr[i] = arr[index]
        arr[index] = tmp
    }
    
    return arr
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1,2,3])
var param_1 = obj.reset()
var param_2 = obj.shuffle()

console.log(param_1)
console.log(param_2)