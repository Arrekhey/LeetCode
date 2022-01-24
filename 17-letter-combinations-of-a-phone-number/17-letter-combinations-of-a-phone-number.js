/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length===0){
        return []
    }
    let myMap = new Map()
     myMap.set(2,"abc")
     myMap.set(3,"def")
     myMap.set(4,"ghi")
     myMap.set(5,"jkl")
     myMap.set(6,"mno")
     myMap.set(7,"pqrs") 
     myMap.set(8,"tuv")
     myMap.set(9,"wxyz")
    let resultMap = new Map()
    function recursive(index,str){
        if(str.length===digits.length){
            resultMap.set(str,1)
        }
        if(index>=digits.length){
            return 
        }
        let temp = myMap.get(parseInt(digits[index]))
        for (let i=0;i<temp.length;i++){
            let tempStr= temp[i]
            recursive(index+1,str+tempStr)
        }
    }
    recursive(0,"")
    return [...resultMap.keys()]
};