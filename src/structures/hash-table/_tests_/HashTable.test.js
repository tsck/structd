import { HashTable } from '../HashTable.js';
import { expect } from 'Chai';

describe('HashTable class', function() {
  describe('put(key, value) and get(key)', function() {
    it('should put value in key and return specific value searched by key', function() {
        let ht = new HashTable();
        ht.put('Mindy', 'Mindy@email.com');
        ht.put('Paul', 'Paul@email.com');
        expect(ht.get('Paul')).to.equal('Paul@email.com');
    });
  });

  describe('remove(key)', function() {
    it('should remove value from Hash Table using key', function() {
      let ht = new HashTable();
      ht.put('Mindy', 'Mindy@email.com');
      ht.put('Paul', 'Paul@email.com');
      ht.remove('Paul');
      expect(ht.get('Paul')).to.be.undefined;
    });

    it('should return false if element not removed', function() {
      let ht = new HashTable();
      ht.put('Mindy', 'Mindy@email.com');
      ht.put('Paul', 'Paul@email.com');
      expect(ht.remove('Jessica')).to.be.false;
    });

    it('should remove value from Hash Table using key', function() {
      let ht = new HashTable();
      ht.put('Mindy', 'Mindy@email.com');
      ht.put('Paul', 'Paul@email.com');
      expect(ht.remove('Mindy')).to.be.true;
    });
  });
});
