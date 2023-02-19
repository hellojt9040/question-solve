// AVG, Worst, BEst case O(n2)

// opposite of bubble sort
// find min for one loop and replace with the first item;
// [2, 3, 7, 1, 9, 4, 5]
// [1, 3, 7, 2, 9, 4, 5]
// [1, 2, 7, 3, 9, 4, 5]
// [1, 2, 3, 7, 9, 4, 5]
// [1, 2, 3, 4, 9, 7, 5]
// [1, 2, 3, 4, 5, 7, 9]
//              |     \|
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
  'selection sort...',
  selectionSortWithComparator(
    ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'],
    ascComp
  )
);
function selectionSort(arr) {
  if (typeof comparator !== 'function') comparator = ascComp;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[min], arr[j]);
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    console.log('after one cyc', arr);
  }
  return arr;
}

function selectionSortWithComparator(arr, comparator = ascComp) {
  debugger;
  if (typeof comparator !== 'function') comparator = ascComp;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[min], arr[j]);
      const comparision = comparator(arr[min], arr[j]);
      if (comparision > 0) min = j;
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    console.log('after one cyc', arr);
  }
  return arr;
}
