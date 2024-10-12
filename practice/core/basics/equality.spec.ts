import { expect } from 'chai';
import { compareEquality } from './equality';

describe('Equality', () => {
  it('should return "Strong Equal"', () => {
    expect(compareEquality(5, 5)).to.be.eq('Strong Equal');
  });

  it('should return "Weak Equal"', () => {
    expect(compareEquality(5, '5')).to.be.eq('Weak Equal');
  });

  it('should return "Completely Different"', () => {
    expect(compareEquality(5, 6)).to.be.eq('Strong Equal');
  });
});