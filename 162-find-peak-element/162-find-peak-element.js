/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let resultIndex = 0
    let flag = true
    function findPeak(start,end){
        if(start>=end){
            return
        }
        let mid = Math.floor((start+end)/2)
        let left = -Infinity
        let right = -Infinity
        mid-1<0?left=left:left = nums[mid-1]
        mid+1>=nums.length?right= right:right = nums[mid+1]
       // console.log(left,right)
        if(nums[mid]>left && nums[mid]>right){
            resultIndex = mid
            flag = false
            return 
        }
        if(flag){
            findPeak(start,mid) 
        }
        if(flag){
            findPeak(mid+1,end)
        }
       
        
    }
 findPeak(0,nums.length)
 return resultIndex
};