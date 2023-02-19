// [2,3,7,1,9,4,5]
//  i   j
console.log(
  'bubble sort..',
  bubbleSortWithComparator([2, 3, 7, 1, 9, 4, 5], ascComp)
);
//  find the bigger one and take that to hte end of arr
// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     let swap = false;
//     for (let j = 0; j < i; j++) {
//       console.log(arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swap = true;
//       }
//     }
//     if (!swap) break;
//     console.log('after one cyc', arr);
//   }
//   return arr;
// }

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

// console.log(
//   'bubble sort..',
//   bubbleSortWithComparator([2, 3, 7, 1, 9, 4, 5], ascComp)
// );
function bubbleSortWithComparator(arr, cb = ascComp) {
  debugger;
  if (typeof cb !== 'function') cb = ascComp;

  for (let i = arr.length - 1; i >= 0; i--) {
    let swap = false;
    for (let j = 0; j < i; j++) {
      console.log(arr[j], arr[j + 1]);
      const comparison = cb(arr[j], arr[j + 1]);
      if (comparison > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
    console.log('after one cyc', arr);
  }
  return arr;
}
