class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

let head = new Node(1);
const second = new Node(4);
head.next = second;
second.prev = head;
let third = new Node(2);
second.next = third;
third.prev = second;
let fourth = new Node(3);
third.next = fourth;
fourth.prev = third;
console.log(head);

class Solution {
  static reverseDLL(head) {
    //code here
    let current = head;
    while (current.next) {
      current = current.next;
    }
    head = current;
    current = head;
    while (current) {
      const tempPrev = current.prev;
      const tempNext = current.next;
      current.next = tempPrev;
      current.prev = tempNext;
      current = current.next;
    }
    return head;
  }
  static reverseDLLAndDelete(head, nodeVal) {
    //code here
    let current = head;
    while (current.next) {
      current = current.next;
    }
    head = current;
    current = head;
    while (current) {
      const tempPrev =
        current.prev?.value === nodeVal ? current.prev.prev : current.prev;
      const tempNext =
        current.next?.value === nodeVal ? current.next.next : current.next;
      current.next = tempPrev;
      current.prev = tempNext;
      current = current.next;
    }
    return head;
  }
}

// console.log('solution...', Solution.reverseDLL(head));
console.log('solution...', Solution.reverseDLLAndDelete(head, 4));
// reverseDoublyLinkedList
