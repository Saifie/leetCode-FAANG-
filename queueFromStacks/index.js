//from stack

class Queue {
  constructor() {
    let stack1 = [];
    let stack2 = [];
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack2.length) {
      while (stack1.peak()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    let poped = this.stack2.pop();
    return poped;
  }
  peak() {
    if (this.stack2.length) {
      while (stack1.peak()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

//from stack

// class Queue {
//   constructor() {
//     let stack1 = new Stack();
//     let stack2 = new Stack();
//   }
//   enqueue(value) {
//     this.stack1.push(value);
//   }
//   [1,2,4]
//   dequeue() {
//     while(stack1.peak()){
//         this.stack2.push(this.stack1.pop());
//     }
//     let poped=this.stack2.pop();
//     while(stack2.peak()){
//         this.stack1.push(this.stack2.pop());
//     }
//     return poped;
//   }
//   peak() {
//     while(stack1.peak()){
//         this.stack2.push(this.stack1.pop());
//     }
//     let peaked=this.stack2.peak();
//     while(stack2.peak()){
//         this.stack1.push(this.stack2.pop());
//     }
//     return peaked;
//   }
// }
