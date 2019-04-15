class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const _head = Symbol("head");

class LinkedList {
  constructor() {
    this[_head] = null;
  }

  unshift(data) {
    if (!data) throw new Error("Invalid data");
    const newNode = new LinkedListNode(data);

    if (!this[_head]) this[_head] = newNode;
    else {
      newNode.next = this[_head];
      this[_head] = newNode;
    }
    return this[_head];
  }

  shift() {
    if (!this[_head]) throw new Error("List is empty");

    const currentNode = this[_head];
    this[_head] = this[_head].next;
    return currentNode;
  }

  push(data) {
    if (!data) throw new Error("Invalid data");
    const newNode = new LinkedListNode(data);

    if (!this[_head]) this[_head] = newNode;
    else {
      let currentNode = this[_head];
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    return newNode;
  }

  pop() {
    if (!this[_head]) throw new Error("List is empty");

    let currentNode = this[_head];
    if (!currentNode.next) {
      this[_head] = null;
      return currentNode;
    }

    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    return currentNode;
  }

  *[Symbol.iterator]() {
    let currentNode = this[_head];
    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList();
