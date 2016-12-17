import { simpleHashCode } from './HashCodes.js';
import { ValuePair } from './ValuePair.js';
import { LinkedList } from '../linked-list/LinkedList.js';

/** Class representing a hash table which maps keys to values. */
export class HashTable {
  /**
   * Creates a hash table.
   */
  constructor() {
    this.table = [];
  }

  /**
   * Gets value at given key.
   * @param {*} key - Key of the element to get.
   * @returns {*|undefined} Returns element at given key, or undefined if no item is found.
   */
  get(key) {
    let position = simpleHashCode(key);

    if (this.table[position] !== undefined) {
      let current = this.table[position].head;

      // loop from 1st element through to n minus 1th element
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        } else {
          current = current.next;
        }
      }

      // check last element
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  }

  /**
   * Put value in table at given key.
   * @param {*} key - Key where to put given value.
   * @param {*} value - Value to put at given key.
   */
  put(key, value) {
    let position = simpleHashCode(key);

    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList();
    }

    this.table[position].append(new ValuePair(key, value));
  }

  /**
   * Remove the value at the given key.
   * @param {*} key - Key of value to remove.
   * @returns {boolean} True if remove is successful, false if it is not.
   */
  remove(key) {
    let position = simpleHashCode(key);

    if (this.table[position] !== undefined) {
      let current = this.table[position].head;

      // loop from 1st element through to n minus 1th element
      while (current.next) {
        if (current.element.key === key) {
          this.table[position].remove(current.element);
          if (this.table[position].isEmpty()) {
            this.table[position] = undefined;
          }
          return true;
        } else {
          current = current.next;
        }
      }

      // check last element
      if (current.element.key === key) {
        this.table[position].remove(current.element);
        if (this.table[position].isEmpty()) {
          this.table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  }
}
