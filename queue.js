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
    let firstItem;
    if(!this.first) {
      throw new Error("The queue is empty");
    } else if(this.first === this.last) {
      firstItem = this.first; 
      this.first = null;
      this.last = null; 
    } else {
      firstItem = this.first;
      this.first = this.first.next; 
    }
    this.size --; 
    return firstItem.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.first) {
      return this.first.val; 
    } else {
      throw new Error("The queue is empty")
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.first) return false;  
    return true; 
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


// class Queue {
//   constructor() {
//     this._list = new LinkedList(); // Initialize the linked list instance
//   }

//   enqueue(val) {
//     this._list.insertAtBack(val); // Use LinkedList's insertAtBack method
//     this.size++; // Update the queue size
//   }

//   dequeue() {
//     if (this._list.isEmpty()) {
//       throw new Error("The queue is empty");
//     }

//     const removedItem = this._list.removeFromFront(); // Use LinkedList's removeFromFront method
//     this.size--; // Update the queue size
//     return removedItem;
//   }

//   peek() {
//     if (this._list.isEmpty()) {
//       throw new Error("The queue is empty");
//     }

//     return this._list.getFirst(); // Use LinkedList's getFirst method
//   }

//   isEmpty() {
//     return this._list.isEmpty(); // Use LinkedList's isEmpty method
//   }
// }

// let numsQueue = new Queue([]); 
// numsQueue.enqueue(1);
// numsQueue.enqueue(2);

// module.exports = Queue;



