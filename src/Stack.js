/* eslint-disable max-classes-per-file */
// Creates a node containing the data and a reference to the next item
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
}
