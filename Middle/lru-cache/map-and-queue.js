// Map和队列

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map()
    this.queue = []
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let val = this.cache.get(key)

    if (val) {
        let index = this.queue.indexOf(key)
        this.queue.splice(index, 1)
        this.queue.push(key)
    }
    return val || -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        let index = this.queue.indexOf(key)
        this.queue.splice(index, 1)
    }
    this.queue.push(key)
    this.cache.set(key, value)
    if (this.cache.size > this.capacity) {
        targetKey = this.queue.shift()
        this.cache.delete(targetKey)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */