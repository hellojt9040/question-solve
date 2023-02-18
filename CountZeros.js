// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
// Time Complexity - O(log n)

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// countZeroes([1, 0, 0, 0, 0]); // 4
// |  |  |
console.log(countZeroes([1, 0, 0, 0, 0])); // 3
// countZeroes([1, 1, 1, 1]); // 0

function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[left] === 1 && arr[right] === 1) return 0;
  if (arr[left] === 0 && arr[right] === 0) return arr.length;
  let middle;
  while (left < right) {
    // find middle
    if (arr[left] === 1 && arr[left + 1] === 0) {
      return right - left;
    }
    middle = Math.floor((left + right) / 2);
    debugger;
    if (arr[middle] !== 0) {
      left = middle;
    } else {
      right = middle;
    }
  }
}
