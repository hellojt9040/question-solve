class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    // debugger;
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      let char = word[index];
      const subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }
  remove(word) {
    let anyAfterWord = false;
    const wordsEndIndex = [];
    function removeHelper(word, index = 0) {
      const char = word[index];
      if (index === word.length) {
        this.isWord = false;
        if (Object.keys(this.characters).length === 1) {
          anyAfterWord = true;
        }
      } else if (index < word.length) {
        if (this.characters[char]) {
          const subTrie = this.characters[char];
          if (subTrie.isWord) {
            if (index + 1 !== word.length) {
              wordsEndIndex.push(index + 1);
            }
          }
          removeHelper.call(subTrie, word, index + 1);

          const prevWordEnd = wordsEndIndex[wordsEndIndex.length - 1];
          if (
            (wordsEndIndex.length ? index + 1 > prevWordEnd : true) &&
            !anyAfterWord
          ) {
            this.characters = {};
          }
        }
      }
      return this;
    }
    const resultTrie = removeHelper.call(this, word);
  }
}

const t1 = new Trie();
t1.addWord('te');
t1.addWord('test');
// t1.addWord('testing');
t1.remove('gtesti');
console.log(t1);
