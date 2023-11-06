/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for(let val of vals) this.enqueue(val);
  }


  print() {
    let current = this.first;
    console.log("current:", current)


    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {

    let newNode = new Node(val); 

    if(!this.first) {
      this.first = newNode; 
      this.last = newNode; 
 
    } else {
      this.last.next = newNode; 
      this.last = newNode; 
    }

    this.size ++; 
    
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

// let numsQueue = new Queue([5, 4, 3, 2, 1]); 
let numsQueue = new Queue([5]); 
console.log("numsQueue:", numsQueue)
console.log("print 1")
numsQueue.print(); 
numsQueue.enqueue(6); 
console.log("print 2")
numsQueue.print();
numsQueue.enqueue(7);  
console.log("print 3")
numsQueue.print();
console.log("numsQueue2:", numsQueue)


module.exports = Queue;
