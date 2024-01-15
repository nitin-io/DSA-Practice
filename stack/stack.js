import Node from "./node.js";

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  peek() {
    this.size > 0 && console.log(this.top.value);
  }

  push(val) {
    this.top = new Node(val, this.top);
    this.size++;
    return this.top;
  }

  pop() {
    if (this.size > 0) {
      let retVal = this.top.value;
      this.top = this.top.next;
      this.size--;
      return retVal;
    } else {
      console.log("stack underflow!");
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let holder = this.top;

    while (holder.next !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

export default Stack;
