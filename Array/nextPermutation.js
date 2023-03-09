// 0 nums 1,2,3 permutationArr[i].toString() 1,2,3

// ALGO
// find form 2nd right , where arr[i] < arr[i+1]
// find from right, where arr[j] > arr[i] // i = found in above step
// if found j, then swap i, j
// reverse the right part of i (els from i+1)

// soln inline
const reverseArr = (arr, i, j) => {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};

const nextPermutation = (arr) => {
  if (!arr || arr.length <= 1) return;
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;
  if (i >= 0) {
    let j = arr.length - 1;
    while (j >= 0 && arr[j] <= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  reverseArr(arr, i+1, arr.length - 1);
  // console.log(arr);
};

// brute force
const generatePermutation = (arr) => {
  debugger;
  if (arr.length <= 1) return arr;
  let serieses = [];
  for (let i = 0; i < arr.length; i++) {
    const nextSeries = arr[i];
    const restItems = arr.filter((el) => el !== nextSeries);
    const res = generatePermutation(restItems);
    res?.forEach((el) => {
      serieses.push([nextSeries, ...(Array.isArray(el) ? [...el] : [el])]);
    });
    if (i === arr.length - 1) {
      return serieses;
    }
  }
  return serieses;
};

const nextPermutation1 = (nums) => {
  const sortedArr = [...nums].sort((a, b) => a - b);
  const permutationArr = generatePermutation(sortedArr);
  console.log(permutationArr);
  for (let i = 0; i < permutationArr.length; i++) {
    if (nums.toString() === permutationArr[i].toString()) {
      if (i === permutationArr.length - 1) return permutationArr[0];
      return permutationArr[i + 1];
    }
  }
};

console.log('final resulut',nextPermutation([1,2,3,4,5]));
