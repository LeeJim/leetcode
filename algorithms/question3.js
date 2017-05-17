// #edtion 1 fail
var lengthOfLongestSubstring = function(s) {
  var len = s.length
    
  if (len <= 1) {
    return len
  }
  
  var max = 0
  
  var obj;

  for(var i=0; i<len; i++) {
    obj = {}
    obj[s.charAt(i)] = i

    if (len - i < max) {
      break
    }

    for(var j=i+1; j<len; j++) {
      if (s.charAt(j) in obj) {
        max = Math.max(j-i, max)
        i = obj[s.charAt(j)]
        break;
      }
      else {
        obj[s.charAt(j)] = j
      }
    }

    if (j === len) {
      max = Math.max(j - i, max)
    }
  }

  return max
};


// edtion 2 success
var lengthOfLongestSubstring = function(s){
  var len = s.length
  var max = 0, left = 0
  var obj = {}
  for(var i=0; i<len; i++) {
    if(obj[s[i]] >= left) {
      left = obj[s[i]] + 1
    }
    obj[s[i]] = i
    max = Math.max(max, i - left + 1)
  }
  return max
};

console.log(lengthOfLongestSubstring('nvpnzppnzhiycmqtcxiyyhghvxnnqscdntqmkhbkojkrxckbcuaadihyfuovosaclsqvzshpdugdwseapeasoittejqtb'))

