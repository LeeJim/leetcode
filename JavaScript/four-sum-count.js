/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  var count = 0
  var len = A.length
  var map = {}
  var sum

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      sum = A[i] + B[j]
      map[sum] = map[sum] ? map[sum] + 1 : 1
    }
  }
  for (var k = 0; k < len; k++) {
    for (var l = 0; l < len; l++) {
      sum = -1 * (C[k] + D[l])
      if (map[sum]) count+=map[sum]
    }
  }
  return count
}
