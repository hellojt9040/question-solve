// [2,4,5,7, 9,12] [1,3,6,8]
[4, 1, 3, 6, 5, 2, 12, 7, 9];

//           |              |
//  [1, 2, 3, 4, 5,6,7,8]
const ascComp = (a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
};
const dscComp = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};

console.log('mergeHelper', mergeHelper([2, 4, 5, 7, 12], [1, 3, 6, 8, 9, 10]));
// console.log('mergeSort', mergeSort([4, 1, 3, 6, 12, 7, 9], dscComp));
function mergeHelper(arr1, arr2, comparator = ascComp) {
  if (typeof comparator !== 'function') comparator = ascComp;

  let i = 0;
  let j = 0;
  const mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    console.log(arr1[i], arr2[j]);
    const comparision = comparator(arr2[j], arr1[i]);
    if (comparision > 0) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  console.log('mergedArr', mergedArr);
  if (i === arr1.length) return mergedArr.concat(arr2.slice(j));
  if (j === arr2.length) return mergedArr.concat(arr1.slice(i));
}

function mergeSort(arr, start = 0, end = arr.length - 1, comparator = ascComp) {
  if (start === end) return [arr[start]];
  const middle = Math.floor((start + end) / 2);
  const left = mergeSort(arr, start, middle);
  const right = mergeSort(arr, middle + 1, end);
  return mergeHelper(left, right, comparator);
}
