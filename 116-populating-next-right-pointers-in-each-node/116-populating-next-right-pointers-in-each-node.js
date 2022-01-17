/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root){
        return root
    }
    if(!root.left && !root.right){
        root.next =null
        return root
    }
    root.next = null
    function recursive(root1,root2){
     //   console.log(root1,root2)
        root1.next = root2
        if(root1.left && root1.right){
          recursive(root1.left,root1.right)  
        }
        if(root1.right && root2 && root2.left){
             recursive(root1.right,root2.left) 
        }
      if(root2 && root2.left && root2.right){
           recursive(root2.left,root2.right)
      }
       if(root2 && root2.left && root2.right){
        recursive(root2.right,null)   
       }
        
    }
    recursive(root.left,root.right)
    return root
};