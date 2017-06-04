import expect from 'expect';

// import currencyConverter
import { pow } from './pow';

describe('Should return pow of given number', () => {
  it('10ˆ3 = 1000', () => {
    expect(pow(10, 3)).toBe(1000);
  });
})
