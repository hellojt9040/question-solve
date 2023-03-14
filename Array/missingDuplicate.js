// You are given a read only array of n integers from 1 to n.

// Each integer appears exactly once except A which appears twice and B which is missing.

// Return A and B.

// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Note that in your output A should precede B.

// Example:

// Input:[3 1 2 5 3]

// Output:[3, 4]

// A = 3, B = 4

const repeatedNumber = (A) => {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  const sumShouldBe = (A.length * (A.length + 1)) / 2;
  const duplicate = A.length - (sumShouldBe - sum + 1);
  const missing = duplicate + sumShouldBe - sum;
  return [duplicate, missing];
};

console.log('result...', repeatedNumber([4, 3, 6, 2, 1, 1]));
