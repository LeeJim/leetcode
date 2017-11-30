/*
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 

  determine if the input string is valid.

  The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var length = s.length
  if (length === 1) return false
  var stack = []
  var map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < length; i++) {
    if ('({['.includes(s[i])) {
      stack.push(s[i])
    } else if (map[stack.pop()] !== s[i]) {
      return false
    }
  }
  return !stack.length
}

console.log(isValid('(]'))
console.log(isValid('(('))
console.log(isValid('('))
