import { expect } from 'chai';
import { ClassExample } from './e3.context';

describe('Context', () => {

  it('should greet', () => {
    const obj = new ClassExample('Tania');

    expect(obj.hello()).to.eq('Hello, Tania!');
  });

  // it('should greet', () => {
  //     const obj = funcExample("Tania");
  //
  //     // expect(obj.hello()).to.eq("Hello, Tania!")
  // });
});