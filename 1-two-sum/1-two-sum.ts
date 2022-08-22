function twoSum(nums: number[], target: number): number[] {
  let resultArray = []
  let map = new Map()
  for (let i=0;i<nums.length;i++){
      if(map.has(nums[i])){
          let temp = map.get(nums[i])
          temp.push(i)
          map.set(nums[i],temp)
      }
      else {
          map.set(nums[i],[i])
      }
  }
    for (let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            let temp = map.get(target-nums[i])
               if(temp.length>1){
                   return temp
               }
               if(i!=temp[0]){
                   return [i,temp[0]]
               } 
            }
        }
};