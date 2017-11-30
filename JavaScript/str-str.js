/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
}

var strStr1 = function(haystack, needle) {
  var length = haystack.length
  var needleLength = needle.length

  if (needleLength == 0) return 0

  if (length == 0) return -1

  if (needleLength > length) return -1

  for (let i = 0; i < length; i++) {
    if (haystack[i] == needle[0]) {
      for (var j = 1; j < needleLength; j++) {
        if (haystack[i + j] != needle[j]) {
          break
        }
      }
      if (j === needleLength) return i
      if (i + j === length) return -1
    }
  }
  return -1
}

var strStr2 = function(haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) return i
      if (i + j === haystack.length) return -1
      if (haystack.charAt(i+j) !== needle.charAt(j)) break
    }
  }
}

console.log(strStr1('mississippi', 'issip'))