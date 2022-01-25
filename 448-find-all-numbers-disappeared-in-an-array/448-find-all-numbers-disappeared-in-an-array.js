/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   
     for(let n of nums) {
        const idx = Math.abs(n) - 1
        if (nums[idx] > 0) nums[idx] *= -1
    }
    console.log(nums)
    let result = []
    for(let i=0; i< nums.length; i++) {
        if(nums[i] > 0) result.push(i+1)
    }
    return result
};