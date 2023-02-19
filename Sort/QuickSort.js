// [4, 1, 3, 6, 12, 2, 7, 9];
// [4, 1, 3, 2, 12, 6, 7, 9];
//  p                  i

// console.log('pivot helper ...', findPivot([13, 1, 3, 6, 12, 2, 7, 9]));
console.log('quickSort ...', quickSort([13, 1, 3, 6, 12, 2, 7, 9]));
function findPivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swap = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swap++;
      if (swap !== i) [arr[swap], arr[i]] = [arr[i], arr[swap]];
    }
  }
  [arr[swap], arr[start]] = [arr[start], arr[swap]];
  return swap;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  debugger;
  if (start < end) {
    const pivotPoint = findPivot(arr, start, end);
    quickSort(arr, start, pivotPoint);
    quickSort(arr, pivotPoint + 1, end);
  }
  return arr;
}
