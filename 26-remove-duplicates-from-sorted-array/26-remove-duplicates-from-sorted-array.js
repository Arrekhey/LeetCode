/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length
   // let counter = 0 
    for (let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
           let temp = nums.splice(i+1,1)
        //   console.log(nums)
         //  nums.push(...temp)
          //  counter+i--
           i--
        }
    }
  //  console.log(nums,counter)
  //   nums.slice(0,counter+1)
};