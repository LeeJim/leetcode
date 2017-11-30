/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stock = []
    this.sortedStock = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stock.push(x)
    this.sortedStock.push(x)
    this.sortedStock.sort((a,b) => a-b)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var x = this.stock.pop()
    this.sortedStock.splice(this.sortedStock.indexOf(x), 1)
    return x
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stock[this.stock.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sortedStock[0]
};
