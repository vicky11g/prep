import { ALL } from 'dns';

export const heapSort = arr => {
  const mheap = new MaxHeap();
  const minHeap = new MinHeap();
  const l = arr.length;
  for (const v of arr) {
    mheap.insert(v);
    minHeap.insert(v);
  }
  arr = [];
  let mArr = [];
  for (let i = 0; i < l; i++) {
    arr.push(mheap.delete());
    mArr.push(minHeap.delete());
  }

  return { max: arr, min: mArr };
};

export class MaxHeap {
  heap;
  constructor() {
    this.heap = [];
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  rightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  print() {
    console.log(this.heap);
  }

  isValid(val) {
    return val || val === 0;
  }

  /**
   * Steps:
   *  1. Add value at the end of array
   *  2. Check if heap covenant is breached if root is smaller than child
   *  3. IF yes then swap root with child
   *  4. keep doing it untill Covenant is fixed
   **/
  insert(val) {
    this.heap.push(val);
    let ci = this.heap.length - 1;
    while (
      this.isValid(this.heap[this.parentIndex(ci)]) &&
      this.heap[this.parentIndex(ci)] < this.heap[ci]
    ) {
      this.swap(this.parentIndex(ci), ci);
      ci = this.parentIndex(ci);
    }
  }

  /**
   * Steps
   * 1. Remove the root (root removal is allowed in heap) i.e first index from the array
   * 2. Place the last element as root
   * 3. Run the check for heap convenant i.e
   * 4. if rootnode is greater than its child
   * 5. if no then swap with larger of two childs
   * 6. Run the loop untill covenant is fixed
   * */
  delete() {
    const item = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    let ci = 0;
    while (
      (this.isValid(this.heap[this.leftChildIndex(ci)]) &&
        this.heap[ci] < this.heap[this.leftChildIndex(ci)]) ||
      this.heap[ci] < this.heap[this.rightChildIndex(ci)]
    ) {
      if (
        this.isValid(this.heap[this.rightChildIndex(ci)]) &&
        this.heap[this.leftChildIndex(ci)] < this.heap[this.rightChildIndex(ci)]
      ) {
        this.swap(ci, this.rightChildIndex(ci));
        ci = this.rightChildIndex(ci);
      } else {
        this.swap(ci, this.leftChildIndex(ci));
        ci = this.leftChildIndex(ci);
      }
    }
    return item;
  }
}

export class MinHeap {
  heap;
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  print() {
    console.log(this.heap.map(m => m.val).join(','));
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  /**
   * Heap insertion takes place from end i.e last leaf as per the level traversal order
   */
  insert(value) {
    this.heap.push(value);
    let ci = this.heap.length - 1;
    let parent = this.parentIndex(ci);
    while (parent >= 0 && this.heap[ci].val < this.heap[parent].val) {
      this.swap(ci, parent);
      ci = parent;
      parent = this.parentIndex(ci);
      // console.log(parent, ci);
    }
  }

  /**
   * Heap deletion takes place from root
   */
  delete() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const deleted = this.heap[0];
    const placeHolder = this.heap.pop();
    this.heap[0] = placeHolder;
    let ci = 0;
    let rc = this.rightChildIndex(ci);
    let lc = this.leftChildIndex(ci);
    while (
      (this.heap[rc] && this.heap[ci].val > this.heap[rc].val) ||
      (this.heap[lc] && this.heap[ci].val > this.heap[lc].val)
    ) {
      let c = rc;
      if (
        this.heap[lc] && this.heap[lc].val < this.heap[rc].val
        // this.heap[lc].val < this.heap[rc].val
      ) {
        c = lc;
      }
      console.log(c,ci,lc,rc);
      this.swap(ci, c);
      ci = c;
      lc = this.leftChildIndex(c);
      rc = this.rightChildIndex(c);
    }
    return deleted;
  }
}
