import { expect } from 'chai';
import { getFirstAndLastItems, getFullName, getSumOfAll, joinArrays, joinTwoArrays } from './e2.destructuring';


describe('ES6+: destructuring', () => {

  it('should get full name', () => {
    const person = { firstName: 'Alice', lastName: 'Wood', age: 30, city: 'New York' };

    expect(getFullName(person)).to.be.eq('Alice Wood');
  });

  it('should get first and last elements of given array', () => {
    const fruits = ['apple', 'banana', 'lemon'];

    expect(getFirstAndLastItems(fruits)).to.be.deep.eq(['apple', 'lemon']);
  });

  it('should return sum of all elements', () => {
    const a = 1, b = 2, c = 3;
    expect(getSumOfAll(a, b, c)).to.be.eq(6);
  });

  it('should join two arrays', () => {
    const a = [1, 3], b = [5, 5], c = [7];
    expect(joinTwoArrays(a, b)).to.be.deep.eq([1, 3, 5, 5]);
    expect(joinArrays(a, b, c)).to.be.deep.eq([1, 3, 5, 5, 7]);
  });
});