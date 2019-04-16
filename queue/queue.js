const _items = new WeakMap();

class Queue {
  constructor() {
    _items.set(this, []);
  }

  unshift(item) {
    if (item) _items.get(this).unshift(item);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Queue is empty");
    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Queue is empty");
    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}
