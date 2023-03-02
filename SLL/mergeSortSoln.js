//User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  //Function to sort the given linked list using Merge Sort.
  mergeSort(head) {
    if (!head || !head.next) return head;

    const middle = this.getMiddle(head);
    const secondHalf = middle.next;
    middle.next = null;

    const headLeft = this.mergeSort(head);
    const headRight = this.mergeSort(secondHalf);
    return this.merge(headLeft, headRight);
  }

  merge(head1, head2) {
    let main = head1.data <= head2.data ? head1 : head2;
    let second = head1.data <= head2.data ? head2 : head1;

    while (main.next && second) {
      if (second.data >= main.data && second.data < main.next.data) {
        const temp = second.next;
        second.next = main.next;
        main.next = second;

        second = temp;
      }
      main = main.next;
    }
    if (second) main.next = second;

    return head1.data <= head2.data ? head1 : head2;
  }

  getMiddle(head) {
    if (head == null) return head;

    let slow = head;
    let fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}
