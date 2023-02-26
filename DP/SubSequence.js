// abc

console.log('subSequence...', subSequence('abc'));
function subSequence(str) {
  const resultArr = [];
  const firstCh = str[0];
  if (!firstCh) return [''];
  const res = subSequence(str.slice(1));
  for (let el of res) {
    resultArr.push('' + el);
    resultArr.push(firstCh + el);
  }
  return resultArr;
}
