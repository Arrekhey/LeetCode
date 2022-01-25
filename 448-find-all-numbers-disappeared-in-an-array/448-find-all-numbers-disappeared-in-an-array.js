/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let myMap = new Map()
    let len = nums.length
    for (let i=1;i<=nums.length;i++){
        myMap.set(i,1)
    }
    for (let i=0;i<nums.length;i++){
        if(myMap.has(nums[i])){
            myMap.delete(nums[i])
        }
    }
    return [...myMap.keys()]
};