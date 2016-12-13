import { simpleHashCode } from './HashCodes.js';
import { ValuePair } from './ValuePair.js';
import { LinkedList } from '../linked-list/LinkedList.js';

export class HashTable {
  constructor() {
    this.table = [];
  }

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

  put(key, value) {
    let position = simpleHashCode(key);

    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList();
    }

    this.table[position].append(new ValuePair(key, value));
  }

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
};
