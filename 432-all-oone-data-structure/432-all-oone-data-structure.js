
var AllOne = function() {
    this.myMap = new Map()
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if(this.myMap.has(key)){
        let temp = this.myMap.get(key)
        this.myMap.set(key,temp+1)
    }
    else {
        this.myMap.set(key,1)
    }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
     if(this.myMap.has(key)){
        let temp = this.myMap.get(key)
        if(temp-1===0){
            this.myMap.delete(key)
        }
         else {
             this.myMap.set(key,temp-1)
         }
    }
    
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    let max = -Infinity
    let returnStr =""
    for (let [key,value] of this.myMap.entries()){
        if(value>max){
            max = value
            returnStr = key
        }
    }
    return returnStr
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    let max = +Infinity
    let returnStr =""
    for (let [key,value] of this.myMap.entries()){
        if(value<max){
            max = value
            returnStr = key
        }
    }
    return returnStr
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */