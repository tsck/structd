import {expect} from 'chai';
import {dStruct} from '../src/dStruct';

describe('The dStruct object', function() {
  describe('Public Stack class', function() {
    it('Should create a new Stack', function() {
      let stack = new dStruct.Stack();
      expect(stack instanceof dStruct.Stack).to.be.true;
    });
  });

  describe('Public Queue class', function() {
    it('Should create a new Queue', function() {
      let queue = new dStruct.Queue();
      expect(queue instanceof dStruct.Queue).to.be.true;
    });
  });

  describe('Public LinkedList class', function() {
    it('Should create a new LinkedList', function() {
      let ll = new dStruct.LinkedList();
      expect(ll instanceof dStruct.LinkedList).to.be.true;
    });
  });
});
