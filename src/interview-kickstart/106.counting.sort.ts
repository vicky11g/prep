/** 
 * COUNTING SORT
*/

export const countingSort = (arr: number[]) => {
  let max = 0;
  const N = arr.length;
  let _ = countSort(arr);
  for (let i = 0; i < arr.length; i++)
    max = Math.max(arr[i], max);
  const astat = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++)
    astat[arr[i]]++;
  for (let i = 1; i <= max; i++) {
    astat[i] += astat[i - 1];
  }
  let rArr = new Array(N);
  for (let i = 0; i < N; i++) {
    rArr[i]= arr[astat[i]]
  }
  return rArr;
  // return countSort(arr);
}

function countSort(inputArray) {
  const N = inputArray.length;

  // Finding the maximum element of inputArray
  let M = 0;
  for (let i = 0; i < N; i++) {
    M = Math.max(M, inputArray[i]);
  }

  // Initializing countArray with 0
  const countArray = new Array(M + 1).fill(0);

  // Mapping each element of inputArray as an index of countArray
  for (let i = 0; i < N; i++) {
    countArray[inputArray[i]]++;
  }
  // console.log(countArray);
  // console.log(countArray);
  // Calculating prefix sum at every index of countArray
  for (let i = 1; i <= M; i++) {
    // console.log(countArray[i], countArray[i - 1], i)
    countArray[i] += countArray[i - 1];
  }
  // Creating outputArray from countArray
  const outputArray = new Array(N);
  for (let i = N - 1; i >= 0; i--) {
    outputArray[countArray[inputArray[i]] - 1] = inputArray[i];
    countArray[inputArray[i]]--;
  }

  return outputArray;
}