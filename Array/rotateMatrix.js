// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const reverse = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    [arr[left++], arr[right--]] = [arr[right], arr[left]];
  }
};

const rotateMatrix = (matrix) => {
  //transpose
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.log('transpose...', matrix);

  // reverse each row
  for (let i = 0; i < matrix.length; i++) {
    reverse(matrix[i]);
  }
};

console.log(
  'rotate...',
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
