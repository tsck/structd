import {Stack} from '../../src/structures/Stack.js';
import {expect} from 'chai';

describe('Stack Class', function() {
  describe('toString()', function() {
    it('should return string representing stack', function() {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.toString()).to.equal('1,2,3');
    });
  });

  describe('pop()', function() {
    it('should remove top item from stack', function() {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.pop();
      expect(stack.size()).to.equal(1);
    });
  });

  describe('push()', function() {
    it('should add item to top of stack', function() {
      let stack = new Stack();
      stack.push(5);
      expect(stack.pop()).to.equal(5);
    });
  });

  describe('size()', function() {
    it('should return 2 for stack containing 2 items', function() {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.size()).to.equal(2);
    });
  });

  describe('isEmpty()', function() {
    it('should return false if stack is not empty', function() {
      let stack = new Stack();
      stack.push(1);
      expect(stack.isEmpty()).to.equal(false);
    });

    it('should return true if stack is empty', function() {
      let stack = new Stack();
      expect(stack.isEmpty()).to.equal(true);
    });
  });

  describe('clear()', function() {
    it('should clear all of the items fromt he stack', function() {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.clear();
      expect(stack.size()).to.equal(0);
    });
  });
});
