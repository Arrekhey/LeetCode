/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.lar = k
    this.arr = nums.sort(function(a,b){
        return b-a
    })
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.arr.length===0){
        this.arr.push(val)
        return val
    }
    //console.log(this.arr,"My Array")
    if(val>this.arr[0]){
            this.arr.unshift(val)
            return this.arr[this.lar-1]
        }
        if(val<this.arr[this.arr.length-1]){
            this.arr.push(val)
            return this.arr[this.lar-1]
        }
        
       for (let i=0;i<this.arr.length;i++){
           if(val>=this.arr[i]){
               this.arr.splice(i,0,val)
               return this.arr[this.lar-1]
           }
           
       }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */