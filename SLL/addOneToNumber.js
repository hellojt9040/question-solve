// A number N is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

// Example 1:

// Input:
// LinkedList: 4->5->6
// Output: 457

// 218729081793941999
// 218729081793942000
// 218729081793941980


// 75893178897985940
// 75893178897985940



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
  static addOneToNumber(head) {
    let current = head;
    let num = '';
    while (current) {
      num += current.value;
      current = current.next;
    }
    // const left = +num.slice(0,Math.ceil(num.length/2)) * Math.pow(10, num.length - Math.ceil(num.length/2))
    // const right = +num.slice(Math.ceil(num.length/2)) + 1;
    const left = +num.slice(0,12) * Math.pow(10, num.length - 12)
    const right = +num.slice(12) + 1;
    const resNum = left + right;
    // const resNum = Number.parseInt(num) + 1 + '';
    // const lastDigit = num % 10;
    // if(lastDigit  > 0){
    //   let current = head;
    //   while(current.next){
    //     current = current.next;
    //   }
    //   current.value = lastDigit;
    // }else {
    //   let current = head;
    //   let index = 0;
    //   while(index<=num.toString().length){
    //     current.value ==
    //   }
    // }
    current = head;
    let index = 0;
    if(num.length !== resNum.length){
      current = new Node(+resNum[0])
      current.next = head;
      head = current;
      current = current.next;
      index++;
    }
    while (index < resNum.length) {
      console.log('current.value', current.value);
      console.log('resNum[index]', resNum[index]);
      if (current.value != resNum[index]) {
        current.value = +resNum[index];
      }
      index++;
      current = current.next;
    }
    return head;
  }
}

const l1 = new SLL();
console.log(
  'push l1', //218729081793941999 75893178897985940
  l1.push(7).push(5).push(8).push(9).push(3).push(1).push(7).push(8).push(8).push(9).push(7).push(9).push(8).push(5).push(9).push(4).push(0)//.push(9).push(9) //.push(4).push(6).push(3).push(7)
);
// console.log('push l1', l1.push(3).push(4).push(5))//.push(4).push(6).push(7));
console.log('addOneToNumber...', SLL.addOneToNumber(l1.head));
