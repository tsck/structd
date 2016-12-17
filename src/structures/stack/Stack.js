let map = new WeakMap();

/** Class representing a last-in-first-out (LIFO) stack of elements. */
export class Stack {
  /**
   * Creates a stack.
   */
  constructor() {
    map.set(this, []);
  }

  /**
   * Get a string representation of the stack.
   * @returns {string} The string representation of stack.
   */
  toString() {
    let stack = map.get(this);
    return stack.toString();
  }

  /**
   * Gets and removes the last element in stack.
   * @returns {*} The last element in stack.
   */
  pop() {
    let stack = map.get(this);
    return stack.pop();
  }

  /**
   * Pushes an element onto stack.
   * @param {*} element - Element to be added to stack.
   */
  push(element) {
    let stack = map.get(this);
    stack.push(element);
  }

  /**
   * Gets the size of stack.
   * @returns {number} The size of stack.
   */
  size() {
    let stack = map.get(this);
    return stack.length;
  }

  /**
   * Checks whether or not the stack is empty.
   * @returns {boolean} True if the stack's empty, false if it's not.
   */
  isEmpty() {
    let stack = map.get(this);
    return stack.length === 0;
  }

  /**
   * Removes all elements from stack.
   */
  clear() {
    let stack = map.get(this);
    stack.splice(0, stack.length);
  }
}
