class TrieNode{
    constructor(){
        this.isEnd = false
        this.children ={}
    }
}


var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.root
    for (let i=0;i<word.length;i++){
        if(currentNode.children[word[i]]){
            currentNode = currentNode.children[word[i]]
        }
        else {
            let newNode = new TrieNode()
         //   console.log(newNode)
            currentNode.children[word[i]] = newNode
         //   console.log(currentNode)
            currentNode = newNode
        }
    }
    currentNode.isEnd  = true
 //   console.log(this.root)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root
    for (let i=0;i<word.length;i++){
        if(current.children[word[i]]){
            current = current.children[word[i]]
        }
        else {
            return false
        }
    }
    return current.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     let current = this.root
    for (let i=0;i<prefix.length;i++){
        if(current.children[prefix[i]]){
            current = current.children[prefix[i]]
        }
        else {
            return false
        }
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */