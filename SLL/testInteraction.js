

//User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
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
    
  findIntersection(head1, head2)
  {
      //your code here
      let newNode = new Node(-1), temp = newNode;
      while(head1 && head2) {
          if(head1.data === head2.data){
              temp.next = head1;
              head1 = head1.next;
              temp = temp.next;
              head2 = head2.next;
          }
          else if(head1.data < head2.data){
              head1 = head1.next;
          }else {
              head2 = head2.next;
          }
      }
      temp.next = null;
      return newNode.next;
  }
}