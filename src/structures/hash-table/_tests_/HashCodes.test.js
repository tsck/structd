import { simpleHashCode } from '../HashCodes.js';
import { expect } from 'Chai';

describe('hashCode() helper function', function() {
  it('should generate number based on the sum each char ASCII value', function() {
    let key = 'Gandalf';
    expect(simpleHashCode(key)).to.equal(19);
  });
});
