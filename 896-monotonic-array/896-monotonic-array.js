/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let greater = 0  
    let lesser = 0 
    let equal = 0 
    
    for (let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            greater++
        }
        if(nums[i]<nums[i+1]){
            lesser++
        }
        if(nums[i]===nums[i+1]){
            equal++
        }
    }
    if(greater+equal===nums.length-1||lesser+equal===nums.length-1){
        return true
    }
    return false
};