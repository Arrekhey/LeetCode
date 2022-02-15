/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let resultArray =[]
    function recursive(index,sum,arr){
        if(index>=candidates.length){
            return
        }
        for (let i=index;i<candidates.length;i++){
            sum+= candidates[i]
            if(sum<target){
                arr.push(candidates[i])
                recursive(i,sum,arr)
                sum-= candidates[i]
                arr.pop()
            }
            if(sum===target){
                arr.push(candidates[i])
                resultArray.push([...arr]) 
                arr.pop()
                sum-= candidates[i]
            }
            if(sum>target){  
                sum-= candidates[i]
            }
        }
    }
    recursive(0,0,[])
    return resultArray
};