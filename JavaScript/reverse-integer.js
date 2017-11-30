/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNegative = false
  if (x < 0) {
    isNegative = true
    x = -x
  }
  var s = x.toString()
  var length = s.length
  var arr = new Array(length)
  for (let i = 0; i < length/2; i++) {
    arr[i] = s[length-i-1]
    arr[length-i-1] = s[i]
  }
  var result = parseInt(arr.join(''))
  if (result > Math.pow(2,31)) return 0
  return isNegative ? -result : result
}
