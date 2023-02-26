// a, ab, abc
//     b, bc
//         c

// function sequence(str) {
//   const resArr = [];
//   const begin = 0;
//   for (let i = begin; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       resArr.push(str.slice(i, j + 1));
//     }
//   }
//   console.log('resArr...', resArr);
// }

console.log('subSequence...', subSequence('abc'));
function subSequence(str) {
  const resArr = [];
  function helper(str) {
    if (!str) return;
    const begin = 0;
    for (let j = begin; j < str.length; j++) {
      resArr.push(str.slice(begin, j + 1));
    }
    // console.log('resArr...', resArr);
    return helper(str.slice(1));
  }

  helper(str);
  return resArr;
}
