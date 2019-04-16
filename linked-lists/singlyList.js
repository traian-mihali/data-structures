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

    const data = this[_head].data;
    this[_head] = this[_head].next;
    return data;
  }

  getAt(index) {
    if (!this[_head] || index < 0) return -1;

    let currentNode = this[_head];
    let currentIndex = 0;
    while (currentNode && currentIndex < index) {
      if (currentIndex === index) return currentIndex;

      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode ? currentNode : -1;
  }

  removeFrom(index) {
    if (!this[_head]) throw new Error("List is empty");

    if (index === 0) {
      let currentNode = this[_head];
      this[_head] = this[_head].next;
      return currentNode.data;
    }

    let previousNode = this.getAt(index - 1);
    let currentNode = null;
    if (previousNode) currentNode = previousNode.next;

    if (currentNode) {
      previousNode.next = currentNode.next;
      return currentNode.data;
    }
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
