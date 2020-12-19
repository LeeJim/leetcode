function swap(a, x, y) {
    var tmp = a[x];
    a[x] = a[y];
    a[y] = tmp;
}
function heapify(a, n, i) {
    while (true) {
        var maxPos = i;
        if (2 * i <= n && a[2 * i] > a[i])
            maxPos = 2 * i;
        if (2 * i + 1 <= n && a[2 * i + 1] > a[maxPos])
            maxPos = 2 * i + 1;
        if (maxPos == i)
            break;
        swap(a, maxPos, i);
        i = maxPos;
    }
    console.log(a);
}
function buildHeap(a, n) {
    for (var i = Math.floor(n / 2); i >= 1; --i) {
        heapify(a, n, i);
    }
    console.log('current heap', a);
}
function sort(a, n) {
    buildHeap(a, n);
    var k = n;
    while (k >= 1) {
        swap(a, 1, k);
        k--;
        heapify(a, n, 1);
    }
}
var arr = [undefined, 7, 5, 6, 4, 2, 1];
sort(arr, arr.length - 1);
