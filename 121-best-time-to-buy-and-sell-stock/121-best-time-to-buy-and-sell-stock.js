/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0 
    let buy = prices[0]
   for (let i=1;i<prices.length;i++){
       if(prices[i]-buy>max){
           max = prices[i]-buy
       }
       if(prices[i]<buy){
           buy = prices[i]
       }
   }
    return max
};