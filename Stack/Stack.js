class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.first;
    this.first = newNode;
    if (!this.size) this.last = newNode;
    this.size++;
    return this;
  }
  pop() {
    if (!this.size) return undefined;

    const poppedNode = this.first;
    this.first = poppedNode.next;
    poppedNode.next = null;
    if (this.size === 1) this.last = null;
    this.size--;
    return poppedNode.value;
  }
}

const s1 = new Stack();
console.log(s1.push(10));
console.log(s1.push(100));
console.log(s1.push(1000));
console.log(s1.pop());
// console.log(s1.pop());
