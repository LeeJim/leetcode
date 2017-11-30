/**
 * @param {number} n
 * @return {number}
 */

// Time Limit Exceeded
var countPrimes = function(n) {
  var count = 0
  while(--n > 0) {
    let i = 2
    for(; i < n; i++) {
      if (n % i === 0) break
    }
    if (i == n) {
      count++
    }
  }
  return count
}

// Memory Limit Exceeded
var countPrimes1 = function(n) {
  var notPrime = []
  var count = 0

  for (let i = 2; i < n; i++) {
    if (!notPrime[i]) {
      count++
      for (let j = 2; j < n; j++) {
        notPrime[i*j] = true
      }
    }
  }
  return count
}

var countPrimes2 = function(n) {
  if (n < 3) return 0
  var count = 1
  var isPrime = n => {
    if (n % 2 == 0) return false

    for (let i = 3; i * i <= n; i+=2) {
      if (n % i == 0) return false
    }
    return true
  }
  for (let i = 3; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
}
