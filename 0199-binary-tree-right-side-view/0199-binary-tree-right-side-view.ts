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

function rightSideView(root: TreeNode | null): number[] {
  if(!root){
      return []
  }
  let result = []
  let queue = [root]
  while(queue.length){
      let n = queue.length
      let tempArray =[]
      for (let i=0;i<n;i++){
          let temp = queue.shift()
          tempArray.push(temp.val)
          if(temp.left){
              queue.push(temp.left)
          }
          if(temp.right){
              queue.push(temp.right)
          }
      }
      result.push(tempArray[tempArray.length-1])
  }
    return result
};