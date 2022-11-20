/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findBottomLeftValue(root: TreeNode | null): number {
     let stack = [root]
     let result = []
     while(stack.length){
         let n = stack.length
          let tempArray =[]
         for (let i=0;i<n;i++){
             let temp = stack.shift()
             tempArray.push(temp.val)
             if(temp.left){
                 stack.push(temp.left)
             }
             if(temp.right){
                 stack.push(temp.right)
             }
         }
         if(stack.length===0){
             result = tempArray
         }
     }
    return result[0]
};