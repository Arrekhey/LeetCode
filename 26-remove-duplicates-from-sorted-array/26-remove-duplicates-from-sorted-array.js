/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertIndex = 1
    let duplicateCount = 0
    for (let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            duplicateCount++
        }
    }
    let value = nums[0]
    for (let i=1;i<nums.length;i++){
     if(value!=nums[i]){
         nums[insertIndex] = nums[i]
         value = nums[i]
         insertIndex++
     }
    }
    
    return nums.length-duplicateCount
};