// source: https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
};

// first version
var reverseString = function(s) {
    var len = s.length;
    for (var i = 0; i < len / 2; i++) {
        var tmp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = tmp;
    }
};