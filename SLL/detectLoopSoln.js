class Solution {
  //Function to check if the linked list has a loop.
  detectLoop(head) {
    if (!head) {
      return false;
    }
    let fast = head.next;
    let slow = head;
    while (fast !== slow) {
      if (!fast || !fast.next) {
        return false;
      }
      fast = fast.next.next;
      slow = slow.next;
    }
    return true;
  }
}
