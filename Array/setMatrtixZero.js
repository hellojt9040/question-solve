const input = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const setMatrixZero1 = (input) => {
  const zeroArr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === 0) {
        zeroArr.push([i, j]);
      }
    }
  }
  // console.log(zeroArr);
  for (let k = 0; k < zeroArr.length; k++) {
    const item = zeroArr[k];
    const row = item[0];
    const col = item[1];
    for (let i = 0; i < input.length; i++) {
      if (i === row) {
        input[i].fill(0);
      } else {
        if (input[i][col] !== 0) {
          input[i][col] = 0;
        }
      }
    }
  }
  // console.log('result...', input)
};

const setMatrixZero = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let anyZeroInFirstCol = false;

  for (let i = 0; i < rows; i++) {
    if (!matrix[i][0]) anyZeroInFirstCol = true;

    for (let j = 1; j < cols; j++) {
      if (!matrix[i][j]) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // move back ward
  for(let i=rows-1; i>= 0; i--){
    for(let j=cols-1; j>=1; j--){
      if(!matrix[0][j] || !matrix[i][0]) matrix[i][j] = 0;
    }
    if(anyZeroInFirstCol) matrix[i][0] = 0;
  }

  return matrix;
};

console.log(setMatrixZero(input));
