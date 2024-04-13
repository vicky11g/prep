/** 
 * Quick sort
 * 
 * Note: Pick random index as pivot value in order to prevent sorting going into O(n^2) !! 
 */
export const quickSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;
  const pivotIndex = hoaresInPlacePartition(arr);
  const larr = quickSort(arr.slice(0, pivotIndex));
  const rarr = quickSort(arr.slice(pivotIndex + 1, arr.length));
  return [...larr, arr[pivotIndex], ...rarr];
}

/** 
 * In place partitions:
 *    Lomuto algo: 
 *      Steps:- 
 *        1. Select first value or arr as pivot value
 *        2. Set small as index tracekr for sub array smaller than pivot values
 *        3. Scan array for big in arr for sub array bigger than pivot values
 *        4. Comapre arr[big] with pivot value
 *        5. When arr[big] < pivot then increment smaller index and swap it with arr[big]
 *        6. AFter the complete scan swap the pivot value with arr[small] for pivot values right position
 */
const lomutosInPlacePartion = (arr: number[]) => {
  let small = 0;
  let pivotIndex = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
  [arr[small], arr[pivotIndex]] = [arr[pivotIndex], arr[small]];
  for (let big = 1; big < arr.length; big++) {
    if (arr[big] < arr[0]) {
      ++small;
      [arr[small], arr[big]] = [arr[big], arr[small]];
    }
  }
  [arr[small], arr[0]] = [arr[0], arr[small]];
  return small;
}

/**  
 * Hoare's partitioning: 
 *      Steps:
 *        1. Select the pivot value at arr[0]
 *        2. Take two pointer smaller = 0 and bigger = arr.length-1
 *        3. Run comparison if(smaller > pivot && bigger < pivot) swap values do smaller++ and bigger--
 *        4. After complete scan swap start with bigger to place the 
 *           pivot value in its final index
 * */
const hoaresInPlacePartition = (arr: number[]) => {
  let small = 1;
  let big = arr.length - 1;

  while (small <= big) {
    if (arr[small] < arr[0]) {
      small++;
    } else if (arr[big] > arr[0]) {
      big--;
    } else {
      [arr[small], arr[big]] = [arr[big], arr[small]];
      small++;
      big--;
    }
  }
  [arr[big], arr[0]] = [arr[0], arr[big]];
  return big
}