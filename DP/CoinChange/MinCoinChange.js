// Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the  minimum number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

// [1,5,7] , 18   // res = 4

// minimum possible coin
// function coinChange(denomination, value) {
//   if (value === 0) return 0;

//   let possibility = Infinity;
//   for (let i = 0; i < denomination.length; i++) {
//     if (value >= denomination[i]) {
//       const childPossibility =
//         coinChange(denomination, value - denomination[i]);
//       possibility = Math.min(possibility, childPossibility + 1);
//     }
//   }
//   return possibility;
// }

function coinChange(denomination, value) {
  if (value === 0) return 0;

  let possibility = Infinity;
  for (let i = 0; i < denomination.length; i++) {
    if (value >= denomination[i]) {
      const childPossibility = coinChange(
        denomination,
        value - denomination[i]
      );
      possibility = Math.min(possibility, childPossibility + 1);
    }
  }
  return possibility;
}

// console.log(coinChange([7, 5, 1], 18));
