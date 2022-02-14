/**
 * @param {string[]} words
 */

class Node {
    constructor(value = '') {
        this.children = new Map();
        this.value = value;
        this.endOfWord = false;
    }
}


var StreamChecker = function(words) {
    this.resultString =""
    this.root = new Node()
    for (let i=0;i<words.length;i++){
        let currNode = this.root
        for (let j=words[i].length-1;j>=0;j--){
            if (!currNode.children.has(words[i][j])) {
                currNode.children.set(words[i][j],new Node(words[i][j]));
            }
            currNode = currNode.children.get(words[i][j]);
        }
          currNode.endOfWord = true;
    }
//   console.log(this.root)
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.resultString= letter+this.resultString
  //  console.log(this.resultString)
  let currentNode = this.root
 // console.log(currentNode)
  for (let i=0;i<this.resultString.length;i++){
      if(currentNode.children.has(this.resultString[i])){
          currentNode = currentNode.children.get(this.resultString[i])
     //     console.log(currentNode,"--------------")
      }
      else {
          return false
      }
      if(currentNode.endOfWord === true) {
    //  console.log("Heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")    
          return true
      }
  }
   return false
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */