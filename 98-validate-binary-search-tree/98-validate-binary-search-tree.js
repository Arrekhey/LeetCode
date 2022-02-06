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
    function recursive(root,left,right){
    
        if(!root){
            return true
        }
    //    console.log(root.val)
        if(!(root.val<right) || !(root.val>left)){
         //   console.log("hey")
            return false
        }
        return recursive(root.left,left,root.val) && recursive(root.right,root.val,right)
    }
    return recursive(root,-Infinity,+Infinity)
};