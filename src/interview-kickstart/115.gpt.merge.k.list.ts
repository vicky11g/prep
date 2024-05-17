class ListNode {
  val;
  next;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeapPriorityQueue {
  heap;
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      parentIndex >= 0 &&
      this.heap[parentIndex].val > this.heap[currentIndex].val
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    let nextIndex = null;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].val < this.heap[currentIndex].val
      ) {
        nextIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].val < this.heap[currentIndex].val &&
        this.heap[rightChildIndex].val < this.heap[leftChildIndex].val
      ) {
        nextIndex = rightChildIndex;
      }

      if (nextIndex === null) break;

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }
}

const mergeKLists = function (lists) {
  const minHeap = new MinHeapPriorityQueue();

  // Push the head of each list onto the min heap
  for (let list of lists) {
    if (list) minHeap.push(list);
  }

  const dummy = new ListNode();
  let tail = dummy;

  // Keep popping the min element from the min heap and adding it to the merged list
  while (minHeap.heap.length > 0) {
    const minNode = minHeap.pop();
    tail.next = minNode;
    tail = tail.next;
    tail.next = null;
    if (minNode.next) minHeap.push(minNode.next);
  }
  

  return dummy.next;
};

function createLists(lists) {
  let l = [];
  for (let n of lists) {
    let node = new ListNode(n[0]);
    l.push(node);
    for (let i = 1; i < n.length; i++) {
      node.next = new ListNode(n[i]);
      node = node.next;
    }
  }
  return l;
}

// Testing
const N = 3;

// array to store head of linkedlist
const a = new Array(N);

// Linkedlist1
const head1 = new ListNode(1);
a[0] = head1;
head1.next = new ListNode(3);
head1.next.next = new ListNode(5);
head1.next.next.next = new ListNode(7);

// Limkedlist2
const head2 = new ListNode(2);
a[1] = head2;
head2.next = new ListNode(4);
head2.next.next = new ListNode(6);
head2.next.next.next = new ListNode(8);

// Linkedlist3
const head3 = new ListNode(0);
a[2] = head3;
head3.next = new ListNode(9);
head3.next.next = new ListNode(10);
head3.next.next.next = new ListNode(11);

console.log(mergeKLists([head1,head2,head3]));

// console.log(mergeKLists(createLists([
//   [1, 4, 7],
//   [2, 3],
//   [5, 8, 9],
// ])));