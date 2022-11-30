class MinStack {
    stack:number[]
    constructor() {
    this.stack =[]
    }
    push(val: number): void {
      this.stack.push(val)
    }
    pop(): void {
     this.stack.pop()
    }
    top(): number {
     return this.stack[this.stack.length-1]
    }
    getMin(): number {
       let newStack = [...this.stack]
       newStack.sort(function(a,b){
           return a-b
       })
        return newStack[0]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */