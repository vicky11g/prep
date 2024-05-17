/**
 * @param {list_int32} arr
 * @return {list_int32}
 */
function heap_sort(arr) {
  // Write your code here.
  return new maxHeap();
}

class maxHeap {
  heap;
  constructor() {
    this.heap = [];
  }
}
console.log(heap_sort([1, 2, 3, 4, 5]));
