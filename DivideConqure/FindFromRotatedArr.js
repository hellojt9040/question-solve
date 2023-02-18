// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)
console.log('found', findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 1));
// findRotatedIndex([3, 4, 1, 2], 4); // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
// findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16); // 5
// 0   1   2   3   4   5  6  7  8  9
//                     || |

function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  // find rotation point
  let pivot;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (right - left === 1) {
      pivot = right;
      break;
    }

    if (arr[left] <= arr[middle]) {
      left = middle;
    } else if (arr[left] > arr[middle]) {
      right = middle;
    }
  }
  debugger;
  console.log('pivot', pivot);

  // finding element
  let beforePivot;
  if (num <= arr[arr.length - 1]) {
    beforePivot = false;
  } else beforePivot = true;

  if (beforePivot) {
    left = 0;
    right = pivot - 1;
  } else {
    left = pivot;
    right = arr.length - 1;
  }

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] > num) right = middle - 1;
    else if (arr[middle] < num) left = middle + 1;
    else return middle;
  }
  return -1;
}
