let map = new WeakMap();

export class Stack {
  constructor() {
    map.set(this, []);
  }

  toString() {
    let stack = map.get(this);
    return stack.toString();
  }

  pop() {
    let stack = map.get(this);
    return stack.pop();
  }

  push(element) {
    let stack = map.get(this);
    stack.push(element);
  }

  size() {
    let stack = map.get(this);
    return stack.length;
  }

  isEmpty() {
    let stack = map.get(this);
    return stack.length === 0;
  }

  clear() {
    let stack = map.get(this);
    stack.splice(0, stack.length);
  }
}
