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
  static removeSorted(head) {
    debugger;
    let left = head;
    let right = head?.next;
    if (!left || !right) return head;
    while (right) {
      if (left.value === right.value) {
        right = right.next;
        left.next = right;

      } else {
        left = left.next;
        right = right.next;
      }
    }
    return head;
  }
}

const l1 = new SLL();
console.log('push l1', l1.push(1).push(2).push(3).push(3).push(6).push(7).push(7));
// console.log('push l1', l1.push(3).push(4).push(5))//.push(4).push(6).push(7));
console.log('removeSorted...', SLL.removeSorted(l1.head));
