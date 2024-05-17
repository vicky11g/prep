/**
 * @param {list_int32} stream
 * [3,8,5,2]
 * @return {list_int32}
 * [3, 5, 5, 4]
 */
export function online_median(stream) {
  let r = [];
  let minHeap = new MinHeap();
  let maxHeap = new MaxHeap();
  for (let i = 0; i < stream.length; i++) {
    if (minHeap.size() === 0) {
      minHeap.insert(stream[i]);
      r.push(stream[i]);
      continue;
    } else if (maxHeap.size() === 0) {
      let t = stream[i];
      if (minHeap.root() < stream[i]) {
        t = minHeap.delete();
        minHeap.insert(stream[i])
      }
      maxHeap.insert(t);
      r.push(Math.floor((maxHeap.root() + minHeap.root()) / 2));
      continue;
    }
    if (stream[i] >= maxHeap.root()) {
      minHeap.insert(stream[i]);
    } else if (stream[i] <= minHeap.root()) {
      maxHeap.insert(stream[i]);
    }
    // console.log(minHeap, maxHeap,stream[i]);

    if (
      Math.abs(minHeap.size() - maxHeap.size()) > 1 &&
      minHeap.size() > maxHeap.size()
    ) {
      const t = minHeap.delete();
      maxHeap.insert(t);
    } else if (
      Math.abs(minHeap.size() - maxHeap.size()) > 1 &&
      minHeap.size() < maxHeap.size()
    ) {
      const t = maxHeap.delete();
      minHeap.insert(t);
    }
    if ((minHeap.size() + maxHeap.size()) % 2 === 0) {
      // console.log(minHeap.size(), maxHeap.size());
      r.push(Math.floor((minHeap.root() + maxHeap.root()) / 2));
    } else {
      // console.log(minHeap.size(), maxHeap.size());
      r.push(minHeap.size() > maxHeap.size() ? minHeap.root() : maxHeap.root());
    }

  }
  return r;
}

class MaxHeap {
  size() {
    return this.heap.length;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  heap;
  constructor() {
    this.heap = [];
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  root() {
    return this.heap[0];
  }

  insert(val) {
    this.heap.push(val);
    let c = this.heap.length - 1;
    let parent = this.parent(c);
    while (this.heap[parent] < this.heap[c]) {
      this.swap(c, parent);
      c = parent;
      parent = this.parent(c);
    }
  }
  delete() {
    const result = this.heap[0];
    this.swap(0, this.heap.length - 1);
    let c = 0;
    let l = this.leftChild(c);
    let r = this.rightChild(c);
    this.heap.pop();
    let len = this.heap.length;
    while (
      (l < len && this.heap[l] > this.heap[c]) ||
      (r < len && this.heap[r] > this.heap[c])
    ) {
      let p = l;
      if (r < len && this.heap[l] < this.heap[r]) {
        p = r;
      }
      this.swap(p, c);
      c = p;
      l = this.leftChild(c);
      r = this.rightChild(c);
    }
    return result;
  }
}

class MinHeap {
  size() {
    return this.heap.length;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  heap;
  constructor() {
    this.heap = [];
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  root() {
    return this.heap[0];
  }

  insert(val) {
    this.heap.push(val);
    let c = this.heap.length - 1;
    let parent = this.parent(c);
    while (this.heap[parent] > this.heap[c]) {
      this.swap(c, parent);
      c = parent;
      parent = this.parent(c);
    }
  }
  delete() {
    const result = this.heap[0];
    this.swap(0, this.heap.length - 1);
    let c = 0;
    let l = this.leftChild(c);
    let r = this.rightChild(c);
    this.heap.pop();
    let len = this.heap.length;
    while (
      (l < len && this.heap[l] < this.heap[c]) ||
      (r < len && this.heap[r] < this.heap[c])
    ) {
      let p = l;
      if (r < len && this.heap[l] > this.heap[r]) {
        p = r;
      }
      this.swap(p, c);
      c = p;
      l = this.leftChild(c);
      r = this.rightChild(c);
    }
    return result;
  }
}
