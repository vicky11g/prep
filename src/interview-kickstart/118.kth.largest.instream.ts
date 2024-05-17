
/**
 * @param {int32} k
 * @param {list_int32} initial_stream
 * @param {list_int32} append_stream
 * @return {list_int32}
 */
export function kth_largest(k, initial_stream, append_stream) {
  let r = [];
  let mn = new MinHeap();
  for (let i = 0; i < Math.min(initial_stream.length,k); i++) {
    mn.insert(initial_stream[i]);
  }
  console.log(mn)
  for (let i = k; i < initial_stream.length; i++) {
    if (mn.root() < initial_stream[i]) {
      mn.delete();
      mn.insert(initial_stream[i]);
    }
  }
  console.log(mn)
  for (let i = 0; i < append_stream.length; i++) {
    if (mn.root() < append_stream[i] || mn.size() < k) {
      if (mn.size() === k) mn.delete();
      mn.insert(append_stream[i]);
    }
    r.push(mn.root())
  }

  return r;
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
    this.heap = []
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
    while ((l < len && this.heap[l] < this.heap[c]) || (r < len && this.heap[r] < this.heap[c])) {
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