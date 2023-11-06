/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;
    for(let val of vals) this.push(val);
  }

  print() {
    let current = this.first;
    console.log("current:", current)


    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  // ! by end it appears to mean the top of the stack which is confusing

  push(val) {
    let newNode = new Node(val);
 
    if(!this.first) {
      this.first = newNode;
      this.last = newNode; 
      this.size ++;
      return 

    } else {
      newNode.next = this.first; 
      this.first = newNode; 
    }

    this.size ++; 
    return val;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  // ! remove from the beginning??? of the stack and return its value

  pop() {
  
    if(!this.first) {
      throw new Error("The stack is empty!")
    }
   
    let firstItem = this.first; 
    this.first = firstItem.next; 

    if(this.first === null) {
      this.last === null;
    }

    this.size --;
    return firstItem.val; 
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

  }
}

let numsStack = new Stack([1]); 
console.log("numsStack:", numsStack)
console.log("print 1")
numsStack.print(); 
numsStack.push(2); 
numsStack.pop();
console.log("print 2")
numsStack.print();

// console.log("print 3")
// numsQueue.print();
console.log("numsStack2:", numsStack)

module.exports = Stack;
