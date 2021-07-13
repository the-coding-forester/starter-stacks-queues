/* eslint-disable max-classes-per-file */
// Creates a node containing the data and a reference to the next item
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
}
