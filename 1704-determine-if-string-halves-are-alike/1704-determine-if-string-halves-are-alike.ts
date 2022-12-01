function halvesAreAlike(s: string): boolean {
         let firstHalf = 0 
         let secondHalf = 0
         let vowelMap = new Map()
        vowelMap.set('a',1)
        vowelMap.set('e',1)
        vowelMap.set('i',1)
        vowelMap.set('o',1)
        vowelMap.set('u',1)
        vowelMap.set('A',1)
        vowelMap.set('E',1)
        vowelMap.set('I',1)
        vowelMap.set('O',1)
        vowelMap.set('U',1)
         for (let i=0;i<Math.floor(s.length/2);i++){
             if(vowelMap.has(s[i])){
                firstHalf++ 
             }
             if(vowelMap.has(s[s.length-1-i])){
                 secondHalf++
             }
         }
    if(firstHalf===secondHalf){
        return true
    }
    return false
};