let map = new WeakMap();

export class Queue {
  constructor() {
    map.set(this, []);
  }

  toString() {
    let queue = map.get(this);
    return queue.toString();
  }

  dequeue() {
    let queue = map.get(this);
    return queue.shift();
  }

  enqueue(element) {
    let queue = map.get(this);
    queue.push(element);
  }

  size() {
    let queue = map.get(this);
    return queue.length;
  }

  isEmpty() {
    let queue = map.get(this);
    return queue.length === 0;
  }

  front() {
    let queue = map.get(this);
    return queue[0];
  }

  clear() {
    let queue = map.get(this);
    queue.splice(0, queue.length);
  }
}
