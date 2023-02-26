// [10,20,30,40]  target 70

console.log('subsets...', findSubSets());
function findSubSets() {
  const resultSubsets = [];
  function targetSumSubSet(arr, target, i = 0, subset = '', sum = 0) {
    if (i === arr.length) {
      if (sum === target) {
        resultSubsets.push(subset);
        return;
      }
      return;
    }
    targetSumSubSet(arr, target, i + 1, subset + arr[i], sum + arr[i]);
    targetSumSubSet(arr, target, i + 1, subset + '', sum);
  }
  targetSumSubSet([10, 20, 30, 40], 70);
  return resultSubsets;
}
