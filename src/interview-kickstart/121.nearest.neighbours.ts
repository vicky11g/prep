/**
 * @param {int32} p_x
 * @param {int32} p_y
 * @param {int32} k
 * @param {list_list_int32} n_points
 * @return {list_list_int32}
 */
export function nearest_neighbours(p_x, p_y, k, n_points) {
  let maxHeap = new MaxHeap();
  const sp = { x: p_x, y: p_y };
  let r = [];
  for (let i = 0; i < k; i++) {
    console.log(sp,n_points[i], maxHeap)
    maxHeap.insert({ val: getDistance(sp, n_points[i]), pts: n_points[i] });
  }
  for (let i = k; i < n_points.length; i++) {
    const d = getDistance(sp, n_points[i]);
    if (maxHeap.root().val > d) {
      maxHeap.delete();
      maxHeap.insert({ val: d, pts: n_points[i] });
    }
  }
  console.log(maxHeap)
  for (let i = 0; i < k; i++) r.push(maxHeap.delete().pts);
  return r;
}

function getDistance(c, p) {
  return Math.sqrt(Math.pow(c.x - p[0], 2) + Math.pow(c.y - p[1], 2));
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
    while (parent > -1 && this.heap[parent].val < this.heap[c].val) {
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
      (l < len && this.heap[l].val > this.heap[c].val) ||
      (r < len && this.heap[r].val > this.heap[c].val)
    ) {
      let p = l;
      if (r < len && this.heap[l].val < this.heap[r].val) {
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
