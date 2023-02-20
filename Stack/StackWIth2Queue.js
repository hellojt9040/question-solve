class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(val) {
    this.q1.push(val);
    return this.q1;
  }
  pop() {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const popped = this.q1.shift();
    [this.q1, this.q2] = [this.q2, this.q1];
    return popped;
  }
}

const s1 = new Stack();
console.log(s1.push(1));
console.log(s1.push(2));
console.log(s1.push(3));
console.log('popped', s1.pop());
// console.log('popped', s1.pop());
console.log(s1);
