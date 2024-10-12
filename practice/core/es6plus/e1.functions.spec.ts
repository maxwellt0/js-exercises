import { expect } from 'chai';
import { multiply } from './e1.functions';


describe('ES6+: functions', () => {

  it('should multiply', () => {
    expect(multiply(5,6)).to.be.eq(30);
  });
});