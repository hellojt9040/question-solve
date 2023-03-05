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
  static detectLoop(head) {
    //detect the loop
    let slow = head,
      fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) return slow;
    }

    if (slow != fast) return null;
  }

  static findMeet(head) {
    let meet = SLL.detectLoop(head);
    let current = head;
    while (meet !== current) {
      meet = meet.next;
      current = current.next;
    }
    return meet;
  }
  static findMeetAndRemove(head) {
    let meet = SLL.detectLoop(head);
    let current = head;
    let prev;
    while (meet !== current) {
      prev = meet;
      meet = meet.next;
      current = current.next;
    }
    prev.next = null;
    return head;
  }
}

const l1 = new SLL();
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);

two.next = three;
one.next = two;

let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
six.next = four;
five.next = six;
four.next = five;

three.next = four;
// console.log('push l1', l1.push(1).push(2).push(3));
// l1.push(four);

// six.next = four;
console.log('l1', one);
// console.log('findMeet...', SLL.findMeet(one));
console.log('findMeetAndRemove...', SLL.findMeetAndRemove(one));
