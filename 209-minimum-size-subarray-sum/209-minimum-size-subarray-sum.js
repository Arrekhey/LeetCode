/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let sum = 0
  let startIndex = 0
  let endIndex = 0
  let maxLength = +Infinity
  for (let i=0;i<nums.length;i++){
      sum+= nums[i]
      if(sum>=target){
          maxLength = Math.min(maxLength,i-endIndex+1)
         // console.log(maxLength)
          while(sum>=target){
               maxLength = Math.min(maxLength,i-endIndex+1)
              sum-=nums[endIndex]
              endIndex++
          }
      }
  }
    return maxLength==+Infinity?0:maxLength
};