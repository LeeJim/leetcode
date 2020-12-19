class Heap {
    static getArray() {
        return a
    }
    constructor(capacity) {
        this.n = capacity
        this.count = 0
        this.a = new Array(capacity + 1)
    }

    swap(x, y, a) {
        let arr = a || this.a;
        [arr[x], arr[y]] = [arr[y], arr[x]]
    }

    insert(val) {
        if (this.count >= this.n) return;
        ++this.count;
        this.a[this.count] = val;
        let i = this.count;
        while( i / 2 > 0 && this.a[parseInt(i/2)] < val) {
            this.swap(parseInt(i/2), i)
            i = parseInt(i/2)
        }
        console.log(this.a);
    }

    removeMax() {
        let { a, count } = this;
        if (count == 0) return;
        a[1] = a[count]
        --count
        this.heapify(this.a, count, 1)
    }

    heapify(a, n, i) {
        while(true) {
            let maxPos = i;
            if (2*i <= n && a[2*i] > a[i]) maxPos = 2*i;
            if (2*i+1 <= n && a[2*i+1] > a[maxPos]) maxPos = 2*i + 1;
            if (maxPos == i) break;
            this.swap(maxPos, i)
            i = maxPos
        }
        console.log(this.a);
    }

    buildHeap(a, n) {
        for (let i = n / 2; i >= 1; --i) {
            this.heapify(a, n, i)
        }
    }

    sort(a, n) {
        this.buildHeap(a, n)
        let k = n
        while(k >= 1) {
            this.swap(1, k, a)
            k--
            this.heapify(a, n, 1)
        }
    }
}

let heap = new Heap(6)
heap.insert(1)
heap.insert(2)
heap.insert(5)
heap.insert(6)
heap.insert(9)
heap.removeMax()