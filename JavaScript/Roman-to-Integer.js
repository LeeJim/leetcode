/*
  Given a roman numeral, convert it to an integer.
  Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // M=1000 D=500 C=100 L=50 X=10 V=5 I=1
    var length = s.length
    var nums = new Array(length)
    var i, value = 0

    for (i = 0; i < length; i++) {
      switch (s.charAt(i)) {
        case 'M':
          nums[i] = 1000
          break
        case 'D':
          nums[i] = 500
          break
        case 'C':
          nums[i] = 100
          break
        case "L":
          nums[i] = 50
          break
        case 'X':
          nums[i] = 10
          break
        case "V":
          nums[i] = 5
          break
        case "I":
          nums[i] = 1
        // no default
      }
    }
    for (i = 0; i < length; i++) {
      if (nums[i+1] > nums[i]) {
        value += (nums[i+1] - nums[i])
        i++
      } else {
        value += nums[i]
      }
    }
    return value
};

// Test
const assert = require('assert')

assert.equal(romanToInt('VI'), 6)
assert.equal(romanToInt('XIX'), 19)
assert.equal(romanToInt('XXI'), 21)
assert.equal(romanToInt('XXIX'),29)
assert.equal(romanToInt('XXXIX'), 39)
assert.equal(romanToInt('XLIX'), 49)
