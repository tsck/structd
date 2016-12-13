import {LinkedList} from '../LinkedList.js';
import {expect} from 'chai';

describe('The LinkedList Class', function() {

  describe('append()', function() {
    it('should add new element to end of list', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      expect(ll.toString()).to.equal('1, 2, 3');
    });
  });

  describe('insert()', function() {
    it('should insert new element at specified position', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      ll.insert(2, 5);
      expect(ll.toString()).to.equal('1, 2, 5, 3, 4');
    });
  });

  describe('remove()', function() {
    it('should remove element from list', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      ll.remove(2);
      expect(ll.toString()).to.equal('1, 3, 4');
    });
  });

  describe('removeAt()', function() {
    it('should remove element at specified position from list if position is 0', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      ll.removeAt(0);
      expect(ll.toString()).to.equal('2, 3, 4');
    });
    it('should remove element at specified position from list if position is not 0', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      ll.removeAt(2);
      expect(ll.toString()).to.equal('1, 2, 4');
    });
  });

  describe('isEmpty()', function() {
    it('should return true if list doesn\'t contain elements', function() {
      let ll = new LinkedList();
      expect(ll.isEmpty()).to.be.true;
    });

    it('should return false if size of list is greater than 0', function() {
      let ll = new LinkedList();
      ll.append(1);
      expect(ll.isEmpty()).to.be.false;
    });
  });

  describe('indexOf()', function() {
    it('should return index of element in list', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      expect(ll.indexOf(2)).to.equal(1);
    });

    it('should return -1 if list is empty', function() {
      let ll = new LinkedList();
      expect(ll.indexOf(2)).to.equal(-1);
    });

    it('should return -1 if element is not in list', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      expect(ll.indexOf(5)).to.equal(-1);
    });
  });

  describe('size()', function() {
    it('should return number of elements in the list', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      expect(ll.size()).to.equal(2);
    });
  });

  describe('toString()', function() {
    it('should return a string containing the list elements', function() {
      let ll = new LinkedList();
      ll.append(1);
      ll.append(2);
      expect(ll.toString()).to.equal('1, 2');
    });
  });
});
