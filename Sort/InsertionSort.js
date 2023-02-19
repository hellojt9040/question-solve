// [2, 3, 7, 1, 9, 4, 5]
// [5, 3, 7, 1, 9, 4, 5]
// [3, 5, 7, 1, 9, 4, 5]
// [3, 5, 7, 7, 9, 4, 5] 1
// [3, 5, 5, 7, 9, 4, 5] 1
// [3, 3, 5, 7, 9, 4, 5] 1
// [1, 3, 5, 7, 9, 4, 5] 1
//  j        i

const ascComp = (a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else 0;
};
const dscComp = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else 0;
};

console.log(
  'insertion sort...',
  insertionSortWithComparator([2, 3, 7, 1, 9, 4, 5], dscComp)
);
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    debugger;
    for (; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = current;
    console.log('after current replcae', arr);
  }
  return arr;
}

function insertionSortWithComparator(arr, comparator = ascComp) {
  if (typeof comparator !== 'function') comparator = ascComp;

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    debugger;

    for (; j >= 0 && comparator(arr[j], current) > 0; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = current;
    console.log('after current replcae', arr);
  }
  return arr;
}
