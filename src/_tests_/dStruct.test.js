import {expect} from 'chai';
import {dstruct} from '../dstruct';

describe('The dStruct object', function() {
  describe('Public Stack class', function() {
    it('Should create a new Stack', function() {
      let stack = new dstruct.Stack();
      expect(stack instanceof dstruct.Stack).to.be.true;
    });
  });

  describe('Public Queue class', function() {
    it('Should create a new Queue', function() {
      let queue = new dstruct.Queue();
      expect(queue instanceof dstruct.Queue).to.be.true;
    });
  });

  describe('Public LinkedList class', function() {
    it('Should create a new LinkedList', function() {
        let ll = new dstruct.LinkedList();
        expect(ll instanceof dstruct.LinkedList).to.be.true;
    });
  });

  describe('Public HashTable class', function() {
    it('Should create a new HashTable', function() {
        let hashTable = new dstruct.HashTable();
        expect(hashTable instanceof dstruct.HashTable).to.be.true;
    });
  });
});
