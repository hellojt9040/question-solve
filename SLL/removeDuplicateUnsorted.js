// Given a linked list consisting of L nodes and given a number N. The task is to find the Nth node from the end of the linked list.

// Example 1:

// Input:
// N = 2
// LinkedList: 1->2->3->4->5->6->7->8->9
// Output: 8
// Explanation: In the first example, there
// are 9 nodes in linked list and we need
// to find 2nd node from end. 2nd node
// from end is 8.

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
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    let current = this.head;
    if (this.head) {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
    return this;
  }
  static removeDuplicateUnsorted1(head) {
    debugger;
    let store = [];
    if (!head || (head && !head.next)) return head;
    while (head) {
      store.push(head.value);
      head = head.next;
    }
    store = [...new Set(store)];
    let left = 0;
    let right = 1;
    let leftNode = new Node(store[left]);
    const resultHead = leftNode;
    let rightNode;
    while (right < store.length) {
      // leftNode = new Node(store[left])
      rightNode = new Node(store[right]);
      leftNode.next = rightNode;
      leftNode = rightNode;
      right++;
    }
    return resultHead;
  }
  static removeDuplicateUnsorted2(head) {
    debugger;
    let store = [];
    if (!head || (head && !head.next)) return head;
    while (head) {
      store.push(head.value);
      head = head.next;
    }
    store = [...new Set(store)].map((each) => new Node(each));
    let right = 1;
    let leftNode = store[0];
    const resultHead = store[0];
    let rightNode;
    while (right < store.length) {
      rightNode = store[right];
      leftNode.next = rightNode;
      leftNode = rightNode;
      right++;
    }
    return resultHead;
  }
  static removeDuplicateUnsortedSoln(head) {
    debugger;
    let hashTable = {};
    let current = head;

    while (current) {
      if (!hashTable[current.value]) hashTable[current.value] = true;
      if (current.next && hashTable[current.next.value]) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  }
}

const l1 = new SLL();
console.log(
  'push l1',
  l1.push(1).push(2).push(3).push(4).push(6).push(3).push(7)
);
// console.log('push l1', l1.push(3).push(4).push(5))//.push(4).push(6).push(7));
console.log(
  'removeDuplicateUnsorted...',
  SLL.removeDuplicateUnsortedSoln(l1.head)
);
