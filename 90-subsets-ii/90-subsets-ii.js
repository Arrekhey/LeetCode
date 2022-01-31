/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
      let resultArray = []
      let arrayMap = new Map()
    function recursive(index,arr){  
        let tempArray = [...arr]
        tempArray.sort(function(a,b){
            return a-b
        })
        if(!arrayMap.has(JSON.stringify(tempArray))){
            arrayMap.set(JSON.stringify(tempArray),1)
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