// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

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
  static reverse(head) {
    let current = head;
    let prev = null;
    let next;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  static reverseWithStartEnd(head, left, right) {
    if (!head || left === right) return head;
    const findNth = (head, n) => {
      let current = head;
      let count = 1;
      if (n !== undefined) {
        while (count < n) {
          count++;
          current = current.next;
        }
        return current;
      } else {
        while (current.next) {
          count++;
          current = current.next;
        }
        return [current, count];
      }
    };

    const [_, length] = findNth(head);
    if (right === length && right - left === length - 1) {
      return SLL.reverse(head);
    }
    let leftHand = findNth(head, left - 1);

    // cut till right
    let rightHand =
      right - (left + 1) > 0
        ? findNth(leftHand.next, right - left + 1)
        : leftHand.next;
    // console.log('rightHand...', rightHand);
    const rightRemaining = rightHand.next;
    rightHand.next = null;
    const reversed = SLL.reverse(leftHand);
    const lastOfReversed = findNth(reversed)[0];
    lastOfReversed.next = rightRemaining;
    if (left > 1) {
      leftHand.next = reversed;
    }
    if (left === 1) {
      return reversed;
    } else {
      return leftHand;
    }
  }

  static reverseWithStartEnd2(list, left, right) {
    const dummy = new Node(0);
    dummy.next = list;
    let head = dummy;
    let curr = 1;

    while (curr++ < left) head = head.next;

    let tail = head.next;
    while (left++ < right) {
      const next = tail.next;
      tail.next = next.next;
      next.next = head.next;
      head.next = next;
    }
    return dummy.next;
  }
}

const l1 = new SLL();
console.log(
  'push l1',
  l1.push(1).push(2).push(3).push(4).push(5).push(6).push(7)
);
// console.log('push l1', l1.push(3).push(5));
console.log('rotateK...', SLL.reverseWithStartEnd2(l1.head, 3, 6));
