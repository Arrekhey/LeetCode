function removeDuplicates(nums: number[]): number {
let duplicates = 0
let actual = nums.length
for (let i=0;i<nums.length;i++){
    if(nums[i]===nums[i+1]){
        nums.splice(i+1,1)
        i--
        duplicates++
    }
}
   return  actual-duplicates
};