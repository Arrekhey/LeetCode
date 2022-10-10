/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let result = 0
    function smash(stones){
        console.log(stones)
        if(stones.length===1){
            result = stones[0]
            return
        }
        if(stones.length===0){
            result =0
            return 
        }
        let tempStones = stones.sort(function(a,b){
            return b-a
        })
        let stone1 = tempStones[0]
        let stone2 = tempStones[1]
        if(stone1===stone2){
            tempStones = tempStones.slice(2,tempStones.length)
            console.log(tempStones)
        }
        if(stone1>stone2){
            tempStones.shift()
            tempStones.shift()
            tempStones.unshift(stone1-stone2)
        }
        smash(tempStones)
    }
   smash(stones)
   return result
};