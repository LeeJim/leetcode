function swap(a: Array<number>, x: number, y: number):void {
    let tmp = a[x];
    a[x] = a[y];
    a[y] = tmp;
}

function heapify(a: Array<number>, n: number, i:number) {
    while (true) {
        let maxPos:number = i;
        if (2 * i <= n && a[2 * i] > a[i]) maxPos = 2 * i;
        if (2 * i + 1 <= n && a[2 * i + 1] > a[maxPos]) maxPos = 2 * i + 1;
        if (maxPos == i) break;
        swap(a, maxPos, i)
        i = maxPos
    }
    console.log(a);
}

function buildHeap(a: Array<number>, n:number) {
    for (let i:number = Math.floor(n / 2); i >= 1; --i) {
        heapify(a, n, i)
    }
    console.log('current heap', a);
}

function sort(a: Array<number>, n:number) {
    buildHeap(a, n)
    let k:number = n
    while (k >= 1) {
        swap(a, 1, k)
        k--
        heapify(a, n, 1)
    }
}

let arr = [7,5,6,4,2,1];
buildHeap(arr, arr.length)