/*
  Given two strings s and t, write a function to determine if t is an anagram of s.

  For example,
  s = "anagram", t = "nagaram", return true.
  s = "rat", t = "car", return false.

  Note:
  You may assume the string contains only lowercase alphabets.

  Follow up:
  What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLen = s.length
        tLen = t.length
        map = {}

    for (let i = 0; i < sLen; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
    }
    for (let i = 0; i < tLen; i++) {
        if (!map[t[i]]) {
            return false
        }
        map[t[i]] = map[t[i]] - 1
    }
    const values = Object.values(map)
    return values.some(item => item !== 0) ? false : true
};