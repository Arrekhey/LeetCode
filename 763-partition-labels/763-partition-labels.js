/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let stringMap = new Map()
    let indexMap = new Map()
    let resultArray = []
    function combiner(startIndex,endIndex){
        let length = 0
        for (let [key,value] of stringMap.entries()){
            if(value[0]>=startIndex){
                length+= value[1]
                stringMap.delete(key)
            }
        }
        return length
    }
    
    for (let i=0;i<s.length;i++){
        if(indexMap.has(s[i])){
            let temp = indexMap.get(s[i])
           let currLength =  combiner(temp,i)
        //   console.log(currLength)
           indexMap.set(s[i],i)
           stringMap.set(s[i],[i,currLength+1])
        }
        else {
            indexMap.set(s[i],i)
            stringMap.set(s[i],[i,1])
        }
    }
    for (let [key,value] of stringMap.entries()){
        resultArray.push(value[1])
    }
    return resultArray
};