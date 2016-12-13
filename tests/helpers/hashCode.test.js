import { hashCode } from '../../src/helpers/hashCode';
import { expect } from 'Chai';

describe('hashCode() helper function', function() {
  it('should generate number based on the sum each char ASCII value', function() {
    let key = 'Gandalf';
    expect(hashCode(key)).to.equal(19);
  });
});
