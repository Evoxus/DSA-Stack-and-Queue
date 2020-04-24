const { _Node } = require("./node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
        return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
        this.last = null;
    }
    return node.value;
  }
}

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

// Helper functions

function peek(queue) {
  return queue.first.value;
}

function isEmpty(queue) {
  if (!queue.first) {
    return true;
  }
  return false;
}

function display(queue) {
  if (!queue.first) {
    console.log("Queue is empty");
    return;
  }
  let current = queue.first;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  return;
}

console.log("peek: ", peek(starTrekQ));
console.log("isEmpty: ", isEmpty(starTrekQ));
display(starTrekQ);


// Drills

/*
Create a queue class using Doubly linked List

Use the items listed in #6 and enqueue them to your queue.

Check to see who is first one on the Queue?
*/

class DoubleNode {
  constructor(data, next = null, previous) {
    this.value = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleQueue {
  constructor(){
    this.head = null;
    this.tail = null;
  }
}