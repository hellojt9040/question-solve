function coinChange(denominations, value) {
  const ways = new Array(value + 1).fill(0); // Initialize array to 0s
  ways[0] = 1; // There is only 1 way to make change for 0

  for (let i = 0; i < denominations.length; i++) {
    const coin = denominations[i];
    for (let j = coin; j <= value; j++) {
      ways[j] += ways[j - coin];
    }
  }

  return ways[value];
}

console.log('No of ways..', coinChange([1, 5, 10, 25], 10));
