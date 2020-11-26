var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return ''

    let idx = 0

    while (true) {
        let char = strs[0].charAt(idx)
        if (strs.every((item, index) => item.charAt(index) == char)) {
            idx++
        } else {
            return strs[0].slice(0, idx)
        }
    }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
