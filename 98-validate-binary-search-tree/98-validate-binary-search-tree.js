/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let flag = true
    function recursive(root,left,right){
       // console.log(root)
        if(!root){
            return true
        }
        if(root.val<=left || root.val>=right){
           // console.log("Hey")
            flag = false
            return 
        }
        recursive(root.left,left,root.val)  
        recursive(root.right,root.val,right)
    }
     recursive(root,-Infinity,+Infinity)
     return flag
};