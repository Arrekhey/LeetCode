/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)return false
    let slow = head
    let fast = head.next?.next?head.next.next:null
    while(fast){
         console.log(slow.val,fast.val)
        if(slow===fast){
            return true
        }
        slow =slow.next
        fast = fast.next?.next?fast.next.next:fast.next
    }
    return false
};