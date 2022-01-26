/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let len = +Infinity
    let start = 0 
    let current = 0
    let sum = 0
    while(current<nums.length){  
        if(sum<target){
            sum+= nums[current]
            if(sum>=target){
                if(current-start<len){
                    len = current-start+1
                }
            }
        }
        if(sum>=target){
            sum-= nums[start]
            start++
            if(sum>=target){
                if(current-start<len){
                    len = current-start+1
                }
            }
        } 
        if(sum<target){
             current++ 
        }    
    }
    if(len===+Infinity){
        return 0
    }
    return len
};