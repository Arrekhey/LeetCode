class MinStack {
    stack:number[]
    minStack:number[]
    min:number
    constructor() {
    this.stack =[]
    this.minStack = []
    this.min = +Infinity
    }
    push(val: number): void {
      if(this.min>val){
          this.min = val
      }
      this.stack.push(val)
      this.minStack.push(this.min)
     // console.log(this.stack)
     // console.log( this.minStack,"This minStack")
    }
    pop(): void {
     this.stack.pop()
     let minValue = this.minStack.pop()
     //console.log(minValue,"this is minValue")
    this.min = this.minStack[this.minStack.length-1]
    if(this.min===undefined){
        this.min = +Infinity
    }
  //  console.log(this.stack,"inside Pop")
   // console.log( this.minStack,"minstack InsidePop")
    }
    top(): number {
   // console.log(this.stack[this.stack.length-1],"top")
     return this.stack[this.stack.length-1]
    }
    getMin(): number {
     return this.min
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