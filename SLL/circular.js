isCircular(head){
  //code here
  // if(head.data === 52){
  // console.log(head.data)
      
  // }
  if(!head) return true;
  let current = head.next;
  while (current) {
    if (current.data === head.data && head.next !== null && current.next !==null && current.next.data === head.next.data) {return true};
    current = current.next;
  }
  return false;
}