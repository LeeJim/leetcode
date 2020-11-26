var Node = function(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
}

Node.prototype.remove = function() {
    this.prev.next = this.next
    this.next.prev = this.prev
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
};

LRUCache.prototype._insert = function(val) {
    let node = new Node(val)

    this.tail.prev.next = node
    node.prev = this.tail.prev
    node.next = this.tail
    this.tail.prev = node

    return node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = this.cache.get(key)
    let val = node && node.val || -1

    if (val !== -1) {
        node.remove()
        this.cache.delete(key)
        let newNode = this._insert(val)
        this.cache.set(key, newNode)
    }

    console.log(val)
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let target = this.cache.get(key)

    if (target) {
        target.remove()
        this.cache.delete(key)
    }

    let node = this._insert(value)
    
    this.cache.set(key, node)

    if (this.cache.size > this.capacity) {
        let val = this.head.next.val
        this.head.next.remove()
        this.cache.delete(val)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);