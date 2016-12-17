import {expect} from 'chai';
import {structd} from '../index';

describe('The structd object', function() {
  describe('Public Stack class', function() {
    it('Should create a new Stack', function() {
      let stack = new structd.Stack();
      expect(stack instanceof structd.Stack).to.be.true;
    });
  });

  describe('Public Queue class', function() {
    it('Should create a new Queue', function() {
      let queue = new structd.Queue();
      expect(queue instanceof structd.Queue).to.be.true;
    });
  });

  describe('Public LinkedList class', function() {
    it('Should create a new LinkedList', function() {
        let ll = new structd.LinkedList();
        expect(ll instanceof structd.LinkedList).to.be.true;
    });
  });

  describe('Public HashTable class', function() {
    it('Should create a new HashTable', function() {
        let hashTable = new structd.HashTable();
        expect(hashTable instanceof structd.HashTable).to.be.true;
    });
  });

  describe('Public BinarySearchTree class', function() {
    it('Should create a new BinarySearchTree', function() {
        let bst = new structd.BinarySearchTree();
        expect(bst instanceof structd.BinarySearchTree).to.be.true;
    });
  });

  describe('Public Graph class', function() {
    it('Should create a new Graph', function() {
        let graph = new structd.Graph();
        expect(graph instanceof structd.Graph).to.be.true;
    });
  });
});
