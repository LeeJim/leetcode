/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let results = [];

  let permutations = (current, remaining) => {
    if(remaining.length <= 0) results.push(current.slice())
    else {
      for(let i = 0; i < remaining.length; i++) {
        current.push(remaining[i])
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i+1)))
        current.pop()
      }
    }
  };

  permutations([], nums);
  return results;
}

// Inspire By http://forum.codecall.net/topic/64715-how-to-generate-all-permutations/
var permute2 = function(nums) {
  var results = []
  var len = nums.length

  var swap = function(arr, fir, sec) {
    var tmp = arr[fir]
    arr[fir] = arr[sec]
    arr[sec] = tmp
  }

  var permution = function(arr, curr) {
    if (curr == len) {
      results.push(arr)
    } else {
      for (var i = curr; i < len; i++) {
        swap(arr, curr, i)
        permution(arr.slice(), curr+1)
        swap(arr, curr, i)
      }
    }
  }

  permution(nums, 0)
  return results
}
