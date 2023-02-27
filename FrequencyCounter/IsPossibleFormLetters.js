// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

console.log('result...', isPossibleFormLetters('aabbcc', 'bcabcaddff'));
function isPossibleFormLetters(message, letters) {
  // add whatever parameters you deem necessary - good luck!
  const counter = {};
  for (let ch of letters) {
    counter[ch] = ++counter[ch] || 1;
  }

  for (let ch of message) {
    if (!counter[ch]) return false;
    counter[ch]--;
  }
  // console.log('counter...', counter);
  return true;
}
