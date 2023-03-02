// Given Pointer/Reference to the head of the linked list, the task is to Sort the given linked list using Merge Sort.
// Note: If the length of linked list is odd, then the extra node should go in the first list while splitting.

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
  static mergeSort(head) {
    const findSize = (head) => {
      let current = head;
      let size = 0;
      while (current) {
        current = current.next;
        size++;
      }
      return size;
    };
    const SllSize = findSize(head);
    // console.log(SllSize);

    const push = (head, val) => {
      let current = head;
      while (current) {
        if (!current.next) {
          current.next = new Node(val);
          return;
        }
        current = current.next;
      }
    };

    const mergeHelper = (head1, head2) => {
      debugger;
      let curr1 = head1;
      let curr2 = head2;
      const newNode = new Node(-1);
      let tempNode = newNode;
      while (curr1 && curr2) {
        if (curr1.value < curr2.value) {
          const node = curr1;
          curr1 = curr1.next;
          node.next = null;
          push(tempNode, node.value);
        } else if (curr1.value > curr2.value) {
          const node = curr2;
          curr2 = curr2.next;
          node.next = null;
          push(tempNode, node.value);
        }
      }
      if (!curr1) {
        let current = curr2;
        while (current) {
          const node = new Node(current.value);
          current = current.next;
          push(tempNode, node.value);
        }
      }
      if (!curr2) {
        let current = curr1;
        while (current) {
          const node = new Node(current.value);
          current = current.next;
          push(tempNode, node.value);
        }
      }
      // console.log(tempNode.next);
      return tempNode.next;
    };

    const traverese = (head, size) => {
      if (size === 1) return head;
      let current = head;
      let counter = 1;
      const mid = Math.ceil(size / 2);
      while (counter < mid) {
        debugger;
        current = current.next;
        counter++;
      }
      const tempRight = current.next;
      current.next = null;
      const tempLeft = head;
      const left = traverese(tempLeft, findSize(tempLeft));
      const right = traverese(tempRight, findSize(tempRight));
      // console.log('left', left);
      // console.log('right', right);
      const result = mergeHelper(left, right);
      debugger;
      // console.log('result...', result);
      return result;
    };
    return traverese(head, SllSize);

    // console.log(current);
  }
}

const l1 = new SLL();
console.log('push l1', l1.push(1).push(8).push(5).push(4).push(6));
console.log(SLL.mergeSort(l1.head));
