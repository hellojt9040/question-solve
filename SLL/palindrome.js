// Given a singly linked list of size N of integers. The task is to check if the given linked list is palindrome or not.

// Example 1:

// Input:
// N = 3
// value[] = {1,2,1}
// Output: 1
// Explanation: The given linked list is
// 1 2 1 , which is a palindrome and
// Hence, the output is 1.

// Expected Time Complexity: O(N)
// Expected Auxialliary Space Usage: O(1)

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
  static getMiddleIndex(head) {
    let slow = head;
    let fast = head;
    let count = 0;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      count++;
    }
    const length = count * 2 + (fast === null ? 0 : 1);
    const middleIndex = length % 2 ? Math.ceil(length / 2) : length / 2;
    return {
      length,
      middleIndex,
      middle: slow,
    };
  }
  static reverse(head){
    let current = head;
    let prev = null;
    let next;
    while(current){
      next =current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  static palindrome(head) {
    const { length, middleIndex, middle } = SLL.getMiddleIndex(head);
    const middleValue = middle.value;
    let middleNext = length%2 ? middle.next : middle;
    length%2 !== 0 && (middle.next = null);
    middleNext = SLL.reverse(middleNext);
    console.log('head...', head);
    console.log('second...', middleNext);
    let p1 = head;
    let p2 = middleNext;
    let index = 0;
    while(p1 && p2 && p1.value === p2.value){
      p1 = p1.next;
      p2 = p2.next;
      index++
    }
    if(index + (length%2 ? 1 : 0) == middleIndex) return true;
    return false;
  }
}

const l1 = new SLL();
console.log('push l1', l1.push(1).push(2).push(3).push(3).push(2).push(1))//.push(6)); //.push(7));
let temp = l1.head.next.next;
l1.head.next.next = null;
console.log(temp)
console.log(l1)
// console.log('push l1', l1.push(3).push(4).push(5)); //.push(4).push(6).push(7));
// console.log('palindrome...', SLL.palindrome(l1.head));
