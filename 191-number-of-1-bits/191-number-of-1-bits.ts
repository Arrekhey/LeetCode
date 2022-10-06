function hammingWeight(n: number): number {
let sum= 0 
function recursive(n){
    if(n===1){
        sum++
        return 
    }
    if(n===0){
        return 
    }
    let rem = n%2
    sum+= rem
    let div = Math.floor(n/2)
    recursive(div)
}
    recursive(n)
    return sum
};