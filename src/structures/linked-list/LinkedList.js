import { LinkedListNode } from './LinkedListNode.js';

/** Class representing a singly linked list of elements. */
export class LinkedList {
  /**
   * Creates a linked list.
   */
  constructor() {
    this.length = 0;
    this.head = null;
  }

  /**
   * Appends an element to the end of list.
   * @param {*} element - Element to be appended to list.
   */
  append(element) {
    let
      node = new LinkedListNode(element),
      current;

    // Check if this is 1st item in list
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // Loop to last node in list
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  /**
   * Inserts an element into the list at a given position.
   * @param {number} position - Position to insert new element.
   * @param {*} element - Element to be inserted into list.
   */
  insert(position, element) {
    let
      node = new LinkedListNode(element),
      prevPosition = position - 1,
      prevNode = this.head,
      nextNode;

      // Get previous element
      for (let i = 0; i < prevPosition; i++) {
        prevNode = prevNode.next;
      }

      nextNode = prevNode.next;
      prevNode.next = node;
      node.next = nextNode;
  }

  /**
   * Removes element from list at given position
   * @param {number} position - Position where element to be removed is.
   */
  removeAt(position) {
    if (position > -1 && position < this.length && this.head != null) {
      let
        prevPosition = position - 1,
        current = this.head;

      if (position === 0) {
        this.head = current.next;
      } else {
        // Get previous element
        for (let i = 0; i < prevPosition; i++) {
          current = current.next;
        }

        // Assign previous elements next to the element after the element being
        // replaced
        current.next = current.next.next;
      }
    }
  }

  /**
   * Removes given element from list.
   * @param {*} element - Element to be removed.
   */
  remove(element) {
    let position = this.indexOf(element);
    this.removeAt(position);
  }

  /**
   * Get the index of a given element.
   * @param {*} element - Element who's index is needed.
   * @returns {number} Index of given element.
   */
  indexOf(element) {
    let
      index = 0,
      current;

    if (this.head) {
      current = this.head;
      while (current) {
        if (current.element === element) return index;
        index++;
        current = current.next;
      }
    }

    // Will only be reached if element not found in list
    return -1;
  }

  /**
   * Checks whether or not the list is empty.
   * @returns {boolean} True if the list's empty, false if it's not.
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Gets the size of list.
   * @returns {number} The size of list.
   */
  size() {
    return this.length;
  }

  /**
   * Get a string representation of the list.
   * @returns {string} The string representation of list.
   */
  toString() {
    let
      current = this.head,
      string = '';

    while(current) {
      string += current.element + ', ';
      current = current.next;
    }

    // Remove trailing space and comma
    string = string.substring(0, string.length - 2);

    return string;
  }

}
