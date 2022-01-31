/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let resultArray = []
    let arrayMap = new Map()
    function recursive(index,arr){  
      //  console.log(index)
        if(!arrayMap.has(JSON.stringify(arr))){
            arrayMap.set(JSON.stringify(arr),1)
            resultArray.push([...arr])
        }
        if(index>nums.length-1){
            return
        }
      //  console.log("hey")
        for (let i=index;i<nums.length;i++){
       //     console.log(nums[i])
            arr.push(nums[i])
            recursive(i+1,arr)
            arr.pop()
        }
    }
    recursive(0,[])
    return resultArray
};