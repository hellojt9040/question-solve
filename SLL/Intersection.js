// Given two linked lists sorted in increasing order, create a new linked list representing the intersection of the two linked lists. The new linked list should be made with its own memory the original lists should not be changed.
// Note: The linked list elements are not necessarily distinct.

// Example 1:

// Input:
// L1 = 1->2->3->4->6
// L2 = 2->4->6->8
// Output: 2 4 6
// Explanation: For the given first two linked list, 2, 4 and 6 are the elements in the intersection.

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
  static intersection(l1, l2) {
    let curr1 = l1.head;
    let curr2 = l2.head;
    const intersections = [];

    while (curr1 && curr2) {
      const val1 = curr1?.value;
      const val2 = curr2?.value;
      if (val1 < val2) {
        curr1 = curr1.next;
      } else if (val1 < val2) {
        curr2 = curr2.next;
      } else {
        intersections.push(curr1.value);
        curr1 = curr1.next;
        curr2 = curr2.next;
      }
    }
    return intersections;
  }
}

const l1 = new SLL();
const l2 = new SLL();
console.log('push l1', l1.push(1).push(2).push(3).push(4).push(6));
console.log('push l2', l2.push(2).push(4).push(6).push(8));
console.log('interactions ...', SLL.intersection(l1, l2));
console.log(l1);
console.log(l2);
