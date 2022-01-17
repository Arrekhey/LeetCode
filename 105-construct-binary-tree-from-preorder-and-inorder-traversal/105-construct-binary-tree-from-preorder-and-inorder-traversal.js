/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
     function constructtree(root,arr){
        let temp = preorder.shift()
        let root1 = root 
        if(temp){
        root1.val = temp    
        }
        let midIndex = 0
        for (let i=0;i<arr.length;i++){
            if(arr[i]===temp){
                midIndex=i
                break
            }
        }
        let left = arr.slice(0,midIndex)
        let right = arr.slice(midIndex+1,arr.length)
        //console.log(left,right,root1)
        if(left.length){
            root1.left = 
            constructtree(new TreeNode(),left)
        }
        if(right.length){
            root1.right = 
            constructtree(new TreeNode(),right)
        }
     //   console.log(root1)
        return root1
    }
   return constructtree(new TreeNode(),inorder)
};