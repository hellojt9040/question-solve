console.log('Singly Linked List');

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    while (index > 0) {
      current = current.next;
      index--;
    }
    return current;
  }
  set(val, index) {
    const nodeFound = this.get(index);
    nodeFound.value = val;
  }
  shift() {
    if (!this.length) return undefined;

    const shifted = this.head;
    this.head = this.head.next;
    shifted.next = null;
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    return shifted;
  }
  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    let current = this.head;
    let next = current.next;
    let counter = 0;
    while (counter < index - 1) {
      current = current.next;
      next = current.next;
      counter++;
    }
    newNode.next = next;
    current.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const current = prev.next;
    const next = prev.next.next;
    prev.next = next;
    current.next = null;
    this.length--;
    return current;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    debugger;
    let counter = 0;
    let prev = null;
    let next;
    while (counter < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      counter++;
    }
    return this;
  }
}

const list1 = new SLL();
list1.push(5).push(10).push(15).push(20);
// list1.push(2);
// list1.push(3);
// list1.pop();
// list1.pop();
// console.log('popped', list1.pop());
// console.log(list1.shift())
// console.log('unshift',list1.unshift('hey'))
// console.log(list1.insert('am 1 now', 1));
// console.log(list1.get(0));
// console.log('inserted',list1.insert('new', -1))
console.log('removed', list1.remove(200));

// console.log(list1.reverse());
console.log(list1);
