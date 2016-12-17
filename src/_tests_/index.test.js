import {expect} from 'chai';
import {Stack} from '../index';
import {Queue} from '../index';
import {HashTable} from '../index';
import {LinkedList} from '../index';
import {BinarySearchTree} from '../index';
import {Graph} from '../index';

describe('The structd object', function() {
  describe('Public Stack class', function() {
    it('Should create a new Stack', function() {
      let stack = new Stack();
      expect(stack instanceof Stack).to.be.true;
    });
  });

  describe('Public Queue class', function() {
    it('Should create a new Queue', function() {
      let queue = new Queue();
      expect(queue instanceof Queue).to.be.true;
    });
  });

  describe('Public LinkedList class', function() {
    it('Should create a new LinkedList', function() {
        let ll = new LinkedList();
        expect(ll instanceof LinkedList).to.be.true;
    });
  });

  describe('Public HashTable class', function() {
    it('Should create a new HashTable', function() {
        let hashTable = new HashTable();
        expect(hashTable instanceof HashTable).to.be.true;
    });
  });

  describe('Public BinarySearchTree class', function() {
    it('Should create a new BinarySearchTree', function() {
        let bst = new BinarySearchTree();
        expect(bst instanceof BinarySearchTree).to.be.true;
    });
  });

  describe('Public Graph class', function() {
    it('Should create a new Graph', function() {
        let graph = new Graph();
        expect(graph instanceof Graph).to.be.true;
    });
  });
});
