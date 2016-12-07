let
  index = require('../src/index'),
  expect = require('chai').expect;

describe('index', () => {
  it('Should return 0', () => {
    expect(index()).to.equal(0);
  });
});
