// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const pascalTriangle1 = (numRows) => {
  var i = 0;
  var j = 0;
  // Create an array list to store the output result...
  var res = [];
  // For generating each row of the triangle...
  for (i = 0; i < numRows; i++) {
    res.push(Array(i + 1)); // Initialize the first row of the pascal triangle as {1}...s
    for (j = 0; j <= i; j++) {
      // Primary...
      if (j === 0 || j === i) {
        res[i][j] = 1;
      } else {
        // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
  }
  return res;
};
const pascalTriangle1 = (numRows) => {
  const final = [];
  const pascalHelper = (numRows) => {
    debugger;
    if (numRows === 1) {
      final.push([1]);
      return [1];
    }
    let res = pascalHelper(numRows - 1);
    let temp = [];
    for (let i = 0; i < res.length; i++) {
      if (i === 0) {
        temp.push(res[i]);
        if (res[i + 1]) {
          temp.push(res[i] + res[i + 1]);
        }
      }
      if (i !== 0 && i !== res.length - 1) {
        temp.push(res[i] + res[i + 1]);
      }
      if (i === res.length - 1) {
        temp.push(res[i]);
      }
    }
    console.log(temp);
    final.push(temp);
    return temp;
  };
  pascalHelper(numRows);
  return final;
};

const pascalTriangle = (numRows) => {
  const final = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      final.push([1]);
    } else {
      let res = final[i - 1];
      let temp = [];
      for (let i = 0; i < res.length; i++) {
        if (i === 0) {
          temp.push(res[i]);
          if (res[i + 1]) {
            temp.push(res[i] + res[i + 1]);
          }
        }
        if (i !== 0 && i !== res.length - 1) {
          temp.push(res[i] + res[i + 1]);
        }
        if (i === res.length - 1) {
          temp.push(res[i]);
        }
      }
      console.log('temp', temp);
      final.push(temp);
    }
  }
  return final;
};

console.log(pascalTriangle(5));
