import { ListNode } from './data-structures/linked.list.node';
import { MinHeap } from './105.heap.sort';

export function merge_k_lists(lists, t = 'A') {
  if ((t = 'A')) lists = createLists(lists);
  let root = new ListNode();
  const minHeap = new MinHeap();
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) minHeap.insert({ val: lists[i].val, p: lists[i] });
  }
  let tail = root;
  while (minHeap.size() > 0) {
    minHeap.print();

    let { p } = minHeap.delete();
    tail.next = p;
    tail = tail.next;
    if (p.next) {
      minHeap.insert({ val: p.next.val, p: p.next });
    }
  }
  print(root.next);
  return root.next;
}

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

function print(root) {
  let ct = 15;
  let ar = [];
  while (root) {
    ar.push(root.val);
    root = root.next;
  }
  console.log('list:', ar.join(', '));
}
