/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0) return true

  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  var middle = s.length / 2
  for (let i = 0; i < middle; i++) {
    if (s[i] != s[s.length-1-i]) return false
  }
  return true
}
