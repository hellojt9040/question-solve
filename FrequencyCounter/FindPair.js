// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true

// Part 1 - solve this with the following requirements:
// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)
console.log('result...', findPair1([6, 1, 4, 10, 2, 4], 22));
function findPair1(arr, diff) {
  const counter = {};
  for (let num of arr) {
    counter[num] = true;
    if (counter[num - diff]) return true;
    if (counter[num + diff]) return true;
  }
  return false;
}

// Part 2 - solve this with the following requirements:
// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)
const asc = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};
console.log('result 2...', findPair2([], 22));
function findPair2(arr, diff) {
  arr.sort(asc);
  let left = 0;
  let right = 1;
  while (right <= arr.length - 1) {
    if (arr[left] - arr[right] < diff) right++;
    else if (arr[left] - arr[right] > diff) {
      if (right - left === 1) {
        right++;
      } else {
        left++;
      }
    } else {
      return true;
    }
  }
  return false;
}
