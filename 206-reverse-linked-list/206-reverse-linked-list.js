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
var reverseList = function(head) {
    if(!head || !head.next){
        return head
    }
    let prev = null
    let curr = head
    let next = head.next
    
    while(curr!=null){
        curr.next = prev
       // console.log(head,"head")
        prev= curr
      //  console.log(prev,"prev")
        curr = next
        if(next!=null){
            next = next.next
           // console.log(next,"next")
        }
        else {
            next = null
        }
    }
    return prev
};