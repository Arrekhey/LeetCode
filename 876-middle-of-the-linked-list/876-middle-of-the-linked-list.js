/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
   let slow = head
   let fast = head
   while(fast.next!=null){
     //  console.log(fast.val)
       slow = slow.next
       if(fast.next.next===null){
         fast = fast.next  
       }
       else {
         fast = fast.next.next   
       }
      
   }
    console.log(slow.next)
    return slow
};