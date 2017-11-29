/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var str = '1'
  for (let i = 1; i < n ; i++) {
    var length = str.length
    var flag = 0
    var current = ''

    for (let j = 1; j <= length; j++) {
      if (j === length || str.charAt(j) !== str.charAt(flag)) {
        current += (j - flag) + str.charAt(flag)
        flag = j
      }
    }
    str = current
  }
  return str
}
