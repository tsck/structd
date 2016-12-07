// let
//   index = require('../src/index'),
//   expect = require('chai').expect;

import {index} from '../src/index';
import {expect} from 'chai';

describe('index', () => {
  it('Should return 0', () => {
    expect(index()).to.equal(0);
  });
});
