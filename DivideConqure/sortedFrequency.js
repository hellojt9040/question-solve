// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

console.log(sortedFrequency([1, 1, 2, 2, 3, 3, 3, 3], 3)); // 4
//                   |||
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

function sortedFrequency(arr, num) {
  function findFirstIndex() {
    let left = 0;
    let right = arr.length - 1;

    debugger;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (arr[middle] < num) left = middle + 1;
      else right = middle - 1;
    }
    return arr[left] === num ? left : undefined;
  }
  console.log('first index...', findFirstIndex());
  function findLastIndex() {
    let left = 0;
    let right = arr.length - 1;
    // if (arr[0] !== num && arr[length - 1] !== num) return -1;

    debugger;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (arr[middle] < num) left = middle + 1;
      else if (arr[middle] > num) right = middle - 1;
      else {
        left = middle + 1;
        if (arr[middle + 1] > num) {
          // left = middle;
          break;
        }
      }
    }

    return arr[left - 1] === num ? left - 1 : undefined;
  }
  const leftIndex = findFirstIndex();
  // console.log(leftIndex);
  if (leftIndex === undefined) {
    return -1;
  }
  let rightIndex = findLastIndex();
  console.log('rightIndex...', rightIndex);
  // if (rightIndex >= arr.length) {
  //   if (arr[rightIndex - 1] === num) rightIndex = rightIndex - 1;
  // }
  return rightIndex - leftIndex + 1;
}
