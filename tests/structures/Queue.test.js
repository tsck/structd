import {Queue} from '../../src/structures/Queue.js';
import {expect} from 'chai';

describe('Queue Class', function() {
  describe('toString()', function() {
    it('should return string representing queue', function() {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.toString()).to.equal('1,2,3');
    });
  });

  describe('dequeue()', function() {
    it('should remove first item from queue', function() {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      expect(queue.size()).to.equal(1);
    });
  });

  describe('enqueue()', function() {
    it('should add item to top of queue', function() {
      let queue = new Queue();
      queue.enqueue(5);
      expect(queue.dequeue()).to.equal(5);
    });
  });

  describe('front()', function() {
    it('should return first item from queue', function() {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.front()).to.equal(1);
    });
  });

  describe('size()', function() {
    it('should return 2 for queue containing 2 items', function() {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.size()).to.equal(2);
    });
  });

  describe('isEmpty()', function() {
    it('should return false if queue is not empty', function() {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.isEmpty()).to.equal(false);
    });

    it('should return true if queue is empty', function() {
      let queue = new Queue();
      expect(queue.isEmpty()).to.equal(true);
    });
  });

  describe('clear()', function() {
    it('should clear all of the items fromt he queue', function() {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.clear();
      expect(queue.size()).to.equal(0);
    });
  });
});
