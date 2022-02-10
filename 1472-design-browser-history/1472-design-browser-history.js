/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.browserMap = new Map()
    this.currentPage = 0 
    this.maxPage = 0 
    this.browserMap.set(this.currentPage,homepage)
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
     let temp = this.currentPage
     for (let [key,value] of this.browserMap.entries()){
         if(key>temp){
             this.browserMap.delete(key)
         }
     }
     this.browserMap.set(temp+1,url)
     this.currentPage = temp+1
     this.maxPage = temp+1
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if(this.currentPage-steps>=0){
        this.currentPage = this.currentPage-steps 
        return this.browserMap.get(this.currentPage)
    }
    this.currentPage =0
    return this.browserMap.get(this.currentPage)
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
     if(this.currentPage+steps<=this.maxPage){
         this.currentPage = this.currentPage+steps
        return this.browserMap.get( this.currentPage)
    }
     this.currentPage = this.maxPage
    return this.browserMap.get(this.currentPage)
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */