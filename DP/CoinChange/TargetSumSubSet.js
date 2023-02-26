// [4,2,7,1,3] target 10
// is there any subset which will make this target sum ?
console.log('target sum result...', targetSumSubset([4, 2, 7, 1, 3], 10));
function targetSumSubset(arr, target) {
  const row = Array.from({ length: target + 1 }, () => false);
  const rows = Array.from({ length: arr.length + 1 }, () =>
    JSON.parse(JSON.stringify(row))
  );
  for (let row of rows) {
    row[0] = true;
  }
  // console.log(rows);
  console.log(rows);

  for (let i = 1; i < row.length; i++) {
    for (let j = 1; j < rows.length; j++) {
      if (i === arr[j - 1]) {
        rows[j][i] = true;
      } else {
        if (rows[j - 1][i]) {
          rows[j][i] = rows[j - 1][i];
        } else {
          if (i - arr[j - 1] >= 0) {
            rows[j][i] = rows[j - 1][i - arr[j - 1]];
          }
        }
      }
    }
  }
  console.log(rows);
  return rows[rows.length - 1][row.length - 1];
}
