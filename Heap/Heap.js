class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    if (this.values.length === 1) return this;

    let idx = this.values.length - 1;
    while (idx) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.values[idx] < this.values[parent]) break;
      [this.values[idx], this.values[parent]] = [
        this.values[parent],
        this.values[idx],
      ];
      idx = parent;
    }
    return this;
  }
  extractMax() {
    if (!this.values.length) return this.values;

    let max = 0;
    let maxEl = this.values[max];
    let end = this.values.pop();
    this.values[max] = end;
    console.log('sink...', this.sinkDown())
    
    return maxEl;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    while (true) {
      const element = this.values[idx];
      const left = 2 * idx + 1;
      const right = left + 1;
      // check valid
      let swap;
      if (left < length) {
        const leftEl = this.values[left];
        if (leftEl > element) {
          swap = left;
        }
      }
      if (right < length) {
        const rightEl = this.values[right];
        if (rightEl > element && (!swap || rightEl > this.values[swap])) {
          swap = right;
        }
      }
      if (!swap) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];
      idx = swap;
    }
    return this;
  }
}

const h = new BinaryHeap();
h.insert(1)
h.insert(2)
h.insert(3)
h.insert(4)
h.insert(5)
h.insert(6)
console.log(h) 

// console.log(
//   'insert...',
//   h.insert(50).insert(20).insert(30).insert(45).insert(40)
// );
// console.log(
//   'insert...',
//   h.insert(50).insert(20).insert(30).insert(45).insert(40)
// );
console.log('remove...', h.extractMax());
