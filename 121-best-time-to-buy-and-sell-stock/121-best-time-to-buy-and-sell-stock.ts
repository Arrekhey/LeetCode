function maxProfit(prices: number[]): number {
let profit = 0  
let currProfit = prices[0] 
for (let i=1;i<prices.length;i++){
    if(prices[i]-currProfit>profit){
        profit = prices[i]-currProfit
    }
    if(prices[i]<currProfit){
        currProfit = prices[i]
    }
}
    return profit
};