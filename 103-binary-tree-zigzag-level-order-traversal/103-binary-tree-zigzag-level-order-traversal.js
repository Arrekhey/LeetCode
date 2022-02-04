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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    let stack =[root]
    let counter = 0 
    let resultArray =[]
    while(stack.length){
        let len = stack.length
        let tempArray =[]
        for (let i=0;i<len;i++){
            let temp = stack.shift()
            tempArray.push(temp.val)
            if(temp.left){
                stack.push(temp.left)
            }
            if(temp.right){
                stack.push(temp.right)
            }
        }
        if(counter%2===0){
            resultArray.push(tempArray)
        }
        else {
            let reverseArray =[]
            for (let i=tempArray.length-1;i>=0;i--){
                reverseArray.push(tempArray[i])
            }
            resultArray.push(reverseArray)
        }
        counter++
    }
    return resultArray
};