// source: https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
};

// first version
var reverseStr = function(s, k) {
    var len = s.length;
    var reverse = function(start, end) {
        for (var i = start; i < (start + end) / 2; i++) {
            console.log(i, '-', end);
            var tmp = s[i];
            s[i] = s[end - i - 1];
            s[end - i - 1] = tmp;
        }
    }
    
    for (var i = 0; i < len; i+=k) {
        if (i == 0 || i > 0 && i + k < len) reverse(i, i + k)
    }
    console.log(s);
};

reverseStr('abcdefg', 2);