// max sum from non adjacent elements
// [5,10,10,100,5,6]

console.log('max greedy...', greedy([5, 10, 10, 100, 5, 6]));
function greedy(arr) {
  let inc = arr[0];
  let exc = 0;
  for (let i = 1; i < arr.length; i++) {
    const ninc = arr[i] + exc;
    const nexc = Math.max(inc, exc);

    inc = ninc;
    exc = nexc;
  }

  return Math.max(inc, exc);
}
