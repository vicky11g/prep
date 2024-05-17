export function getKthLargest(arr, k) {
  helper(arr, arr.length - k, 0, arr.length - 1)
  return arr[arr.length - k];

}

const helper = (arr, k, left, right) => {
  if (right - left === 0) return arr[left];
  const pivot = lomutosInPlacePartition(arr, left, right);
  if (k === pivot) return arr[pivot];
  else if (k > pivot) return helper(arr, k, pivot + 1, right);
  return helper(arr, k, left, pivot - 1);
};

const getRandom = (left, right) => {
  const r = Math.floor(Math.random() * (right - left + 1)) + left;
  return r;
};

const lomutosInPlacePartition = (arr, left, right) => {
  const pivot = getRandom(left, right);
  const pIdx = left;
  swap(arr, pivot, left);
  let small = left;
  for (let big = left + 1; big <= right; big++) {
    if (arr[big] < arr[pIdx]) {
      ++small;
      swap(arr, big, small);
    }
  }
  swap(arr, left, small);
  return small;
};

const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);
