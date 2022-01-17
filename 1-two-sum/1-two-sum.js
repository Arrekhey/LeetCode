/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myMap = new Map()
    for (let i=0;i<nums.length;i++){
        if(myMap.has(nums[i])){
            let temp = myMap.get(nums[i])
            temp.push(i)
            myMap.set(nums[i],temp)
        }
        else{
            myMap.set(nums[i],[i])
        }
    }
    for (let i=0;i<nums.length;i++){
        if(myMap.has(target-nums[i]) && myMap.get(target-nums[i])[0]!=i){
            return [i,myMap.get(target-nums[i])]
        }
        if(myMap.has(target-nums[i]) && myMap.get(target-nums[i]).length>1){
            return myMap.get(target-nums[i])
        }
    }
};