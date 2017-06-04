import expect from 'expect';

// import currencyConverter
import { currencyConverter } from './currencyConverter';

describe('Should convert between currencies', () => {
  it('if EUR/USD = 0.894786 and we have 10 EUR, should return 11.17', () => {
    const currencyOne = 0.894786;
    const currencyTwo = 1;
    const value = 11.17;

    expect(currencyConverter(currencyOne, currencyTwo, 10)).toBe(value);
  });
})
