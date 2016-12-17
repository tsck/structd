let map = new WeakMap();

/** Class representing a first-in-first-out (FIFO) queue of elements. */
export class Queue {
  /**
   * Creates a queue.
   */
  constructor() {
    map.set(this, []);
  }

  /**
   * Get a string representation of queue.
   * @returns {string} The string representation of queue.
   */
  toString() {
    let queue = map.get(this);
    return queue.toString();
  }

  /**
   * Removes the first element from the queue.
   * @returns {*} Element removed from queue.
   */
  dequeue() {
    let queue = map.get(this);
    return queue.shift();
  }

  /**
   * Places an element onto queue.
   * @param {*} element - Element to be added to queue.
   */
  enqueue(element) {
    let queue = map.get(this);
    queue.push(element);
  }

  /**
   * Gets the size of queue.
   * @returns {number} The size of queue.
   */
  size() {
    let queue = map.get(this);
    return queue.length;
  }

  /**
   * Checks whether queue is empty.
   * @returns {boolean} True if empty, false if not.
   */
  isEmpty() {
    let queue = map.get(this);
    return queue.length === 0;
  }

  /**
   * Gets first element of queue without removing it.
   * @returns {*} First element of queue.
   */
  front() {
    let queue = map.get(this);
    return queue[0];
  }

  /**
   * Removes all elements from queue.
   */
  clear() {
    let queue = map.get(this);
    queue.splice(0, queue.length);
  }
}
