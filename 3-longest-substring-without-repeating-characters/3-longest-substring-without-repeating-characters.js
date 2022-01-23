/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let myMap = new Map()
    let startIndex = 0 
    let maxLength = 0 
    let tempLength = 0
    for (let i=0;i<s.length;i++){
        if(myMap.has(s[i])){
           // console.log(myMap)
            let temp = myMap.get(s[i])
           // console.log(temp)
            if(temp>=startIndex){
                 startIndex = temp+1
            myMap.set(s[i],i)
              //  console.log(tempLength,maxLength)
                if(tempLength>maxLength){
                  //  console.log(tempLength,"hehehehe")
                    maxLength = tempLength
                }
            tempLength = i-startIndex+1
           // console.log(startIndex,myMap,i,tempLength,maxLength,s[i]) 
            }
            else {
                tempLength++
                if(tempLength>maxLength){
                    maxLength = tempLength
                }
            }
             myMap.set(s[i],i)
          //  i = temp
        }
        else {
            myMap.set(s[i],i)
            tempLength++
            console.log(tempLength)
            if(tempLength>maxLength){
                maxLength = tempLength
            }
        }
    }
    return maxLength
};