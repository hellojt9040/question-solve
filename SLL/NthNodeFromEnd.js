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
  static nThNodeFromEnd(head, n) {
    if (!head) return -1;

    const checkNullDistance = (subHead, num) => {
      while (num) {
        if (!subHead) return -1;
        subHead = subHead.next;
        num--;
      }
      return !subHead;
    };

    let curr = head;
    while (curr) {
      const res = checkNullDistance(curr, n);
      if (res === true) {
        return curr.value;
      } else if (res === -1) {
        break;
      } else {
        curr = curr.next;
      }
    }
    return -1;
  }
}

const l1 = new SLL();
console.log('push l1', l1.push(1).push(2).push(3).push(4).push(6));
console.log(SLL.nThNodeFromEnd(l1.head, 5));
