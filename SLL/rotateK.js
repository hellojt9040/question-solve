// Given the head of a linked list, rotate the list to the right by k places.

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

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
  static rotateK(head, k) {
    const findLastAndSize = (head) => {
      let current = head;
      let count = 0;
      while (current?.next) {
        count++;
        current = current.next;
      }
      return [current, count + 1];
    };
    let [_, count] = findLastAndSize(head);
    if (count <= 1) return head;
    let current = head;
    if (k > count) k = k % count;
    if (k === count || k === 0) return head;
    while (count !== k + 1) {
      count--;
      current = current.next;
    }
    let temp = current.next;
    const [tempLast] = findLastAndSize(temp);
    tempLast.next = head;
    current.next = null;
    return temp;
  }
}

const l1 = new SLL();
// console.log('push l1', l1.push(1).push(2).push(3).push(4).push(6).push(7));
console.log('push l1', l1.push(3).push(4)); //.push(5)); //.push(4).push(6).push(7));
console.log('rotateK...', SLL.rotateK(l1.head, 6));
