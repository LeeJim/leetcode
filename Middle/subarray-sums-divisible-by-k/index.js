/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
    let record = new Array(K).fill(0)
    record[0] = 1
    let account = 0
    let sum = 0

    for (let num of A) {
        sum += num;
        console.log('sum', sum, 'num', num);
        let modK = (sum % K + K) % K
        console.log('modk', modK);
        
        account += record[modK]
        record[modK] ++
        console.log('record', record);
        console.log(account);
    }
    console.log(account);
    
    return account
};

subarraysDivByK([4, 5, 0, -2, -3, 1], 5)