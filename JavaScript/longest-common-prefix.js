/*
  Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  var prefix = ''
  var str = strs[0]
  var length = str.length

  for (let i = 0; i < length; i++) {
    var tmp = str.charAt(i)
    if (strs.every(str => str.charAt(i) === tmp)) {
      prefix += tmp
    } else {
      return prefix
    }
  }
  return prefix
}
