// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)

console.log('result ...', findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
function findAllDuplicates(arr) {
  const resultArr = [];
  const counter = {};
  for (let item of arr) {
    if (!counter[item]) {
      counter[item] = 1;
    } else {
      resultArr.push(item);
    }
  }
  return resultArr;
}
