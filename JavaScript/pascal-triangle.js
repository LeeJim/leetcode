/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = []
  if (numRows < 1) return result

  result[0] = [1]

  for (let i = 1; i < numRows; i++) {
    result[i] = new Array(i+1)
    var pre = result[i-1]
    for (let j = 0; j < i + 1; j++) {
      result[i][j] = ((pre[j-1] || 0) + (pre[j] || 0))
    }
  }
  return result
}
