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
  findWord(word, index = 0) {
    const char = word[index];
    if (index === word.length - 1) {
      return this.characters[char];
    } else if (index < word.length - 1) {
      if (this.characters[char]) {
        const subTrie = this.characters[char];
        return subTrie.findWord(word, index + 1);
      }
    }
  }
  getWords(words = [], currentWord = '') {
    for (let char in this.characters) {
      if (this.characters[char].isWord) words.push(currentWord + char);
      const subTrie = this.characters[char];
      const res = subTrie.getWords(words, currentWord + char);
      // console.log(res);
    }
    return words;
  }
  autoComplete(prefix, index = 0) {
    const char = prefix[index];
    if (index === prefix.length) {
      const res = this.getWords();
      return Array.from(res, (el) => {
        return prefix + el;
      })
    }
    if (index < prefix.length) {
      if (this.characters[char]) {
        const subTrie = this.characters[char];
        return subTrie.autoComplete(prefix, index + 1);
      }
    }
    return [];
  }
}

const t1 = new Trie();
// t1.addWord('te');
// t1.addWord('test');
// t1.addWord('do');
// t1.addWord('done');
// t1.addWord('dont');

t1.addWord('fun')
t1.addWord('fast')
t1.addWord('fat')
t1.addWord('fate')
t1.addWord('father')
t1.addWord('forget')
t1.addWord('awesome')
t1.addWord('argue')

// t1.addWord('testing');
// t1.remove('test');
// console.log('resr...', t1.findWord('test'));
// console.log('get words...', t1.getWords());
console.log('autocomplete for d...', t1.autoComplete('arz'));
console.log(t1);
