// import LinkedList from "./linkedList";
const LinkedList = require('./linkedList')

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
    // constructor(vals = []) {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
      this._list = new LinkedList(); 
      console.log("this._list:", this._list)
  
    }
  
  
    print() {
      let current = this.first;
    
      while (current !== null) {
        current = current.next;
      }
    }
  
    /** enqueue(val): add new value to end of the queue. Returns undefined. */
  
    enqueue(val) {
      let newNode = new Node(val); 
      this._list.push(newNode);  
      console.log("this._list", this._list)
    }
  
    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */
  
    dequeue() {
        this._list.shift();
    }
  
    /** peek(): return the value of the first node in the queue. */
  
    peek() {
        
     if(this._list.getAt(0)) return this._list.getAt(0); 
     throw new Error("The queue is empty"); 
 
    }
  
    /** isEmpty(): return true if the queue is empty, otherwise false */
  
    isEmpty() {
      if(this.first) return false;  
      return true; 
    }
  }
  
  // let numsQueue = new Queue([5, 4, 3, 2, 1]); 
  let numsQueue = new Queue([5]); 
  console.log("numsQueue._list:", numsQueue._list)
  console.log("print 1")
  numsQueue.print(); 
  numsQueue.enqueue(6); 
  numsQueue.enqueue(7); 
  console.log("numsQueue._list:", numsQueue._list)
  console.log("print 2")
  numsQueue.print();
  numsQueue.dequeue();  
  console.log("print 3")
  numsQueue.print();
  console.log("numsQueue2._list:", numsQueue._list)
  numsQueue.peek();
  console.log("numsQueue.peek:", numsQueue.peek())
  
  
  module.exports = Queue;
  