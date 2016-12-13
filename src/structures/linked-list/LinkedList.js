import { LinkedListNode } from './LinkedListNode.js';

export class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

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

  remove(element) {
    let position = this.indexOf(element);
    this.removeAt(position);
  }

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

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

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

};
