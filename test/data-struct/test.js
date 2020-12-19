var assert = require('assert');
let Heap = require('../../data-struct/heap/index')

describe('Heap', function () {
    describe('insert', function () {
        let heap = new Heap();
        it('should return -1 when the value is not present', function () {
            heap.insert(1)
            heap.getArray()
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});