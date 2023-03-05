// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

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
  static reverseKthTime(head, k) {
    const dummy = new Node(0);
    dummy.next = head;
    head = dummy;
    let counterPer = 0;
    let tail = head.next;

    const findSize = (head) => {
      let current = head;
      let size = 0;
      while (current) {
        current = current.next;
        size++;
      }
      return size;
    };

    const moveHeadTillIndex = () => {
      let counter = k;
      while (counter-- > 0) {
        head = head.next;
        tail = head.next;
      }
    };

    // moveHeadTillIndex(k * counterPer);
    let count = 1;
    while (count <= k - 1) {
      debugger;
      const next = tail.next;
      tail.next = next.next;
      next.next = head.next;
      head.next = next;
      console.log('next', next);
      console.log('tail', tail);
      if (count === k - 1) {
        counterPer++;
        moveHeadTillIndex(k * counterPer);
        count = 1;
        const size = findSize(tail);
        if (size < k) return dummy.next;
      } else {
        count++;
      }
    }
  }
  static reverseKthTimeSoln (head, k) {
    let count = 0;
    let node = head;
    while (node && count != k) {
        node = node.next;
        count++;
    }
    if (count == k) {
        node = SLL.reverseKthTimeSoln(node, k);
        while (count > 0) {
            let temp = head.next;
            head.next = node;
            node = head;
            head = temp;
            count--;
        }
        head = node;
    }
    return head;
  }
}

const l1 = new SLL();
console.log('push l1', l1.push(1).push(2).push(3).push(4).push(5)); //.push(6));
// console.log('push l1', l1.push(3).push(4).push(5)); //.push(4).push(6).push(7));
console.log('reverseKthTime...', SLL.reverseKthTimeSoln(l1.head, 2));
