import { inputFilter } from './inputFilter';

describe('inputFilter must filter input value to currency mask', () => {
  describe('with a single digit', () => {
    const value = '5';

    it('returns a 5', () => {
      expect(inputFilter(value)).toEqual('5');
    });
  });

  describe('with a double digit number', () => {
    const value = '50';
    it('returns a 50', () => {
      expect(inputFilter(value)).toEqual('50');
    });
  });

  describe('with a double digit number and dot', () => {
    const value = '50.';
    it('returns a 50.', () => {
      expect(inputFilter(value)).toEqual('50.');
    });
  });

  describe('with a double digit number, dot and one digit after dot  ', () => {
    const value = '50.8';
    it('returns a 50.8', () => {
      expect(inputFilter(value)).toEqual('50.8');
    });
  });

  describe('with a double digit number, dot and two digits after dot  ', () => {
    const value = '50.89';
    it('returns a 50.89', () => {
      expect(inputFilter(value)).toEqual('50.89');
    });
  });

  describe('with a triple digit number', () => {
    const value = '255';
    it('returns a 255', () => {
      expect(inputFilter(value)).toEqual('255');
    });
  });

  describe('with a several-digit number', () => {
    const value = '2558';
    it('returns a 2558', () => {
      expect(inputFilter(value)).toEqual('2558');
    });
  });

  describe('with one leading zero and a dollar amount', () => {
    const value = '02250';
    it('returns a 2250', () => {
      expect(inputFilter(value)).toEqual('2250');
    });
  });

  describe('with several leading zeros and a dollar amount', () => {
    const value = '000250';
    it('returns a 250', () => {
      expect(inputFilter(value)).toEqual('250');
    });
  });

  describe('with several leading zeros and a cents amount', () => {
    const value = '000050';
    it('returns a 50', () => {
      expect(inputFilter(value)).toEqual('50');
    });
  });

  describe('the value includes dots', () => {
    const value = '2.04';
    it('returns a 2.04', () => {
      expect(inputFilter(value)).toEqual('2.04');
    });
  });

  describe('with invalid value', () => {
    const value = 'abcdef';
    it('returns a empty string', () => {
      expect(inputFilter(value)).toEqual('');
    });
  });

  describe('with no value', () => {
    it('returns a empty string', () => {
      expect(inputFilter()).toEqual('');
    });
  });
  describe('with crazy string', () => {
    const value = 'abcdef000000234243.234324';
    it('returns a empty string', () => {
      expect(inputFilter(value)).toEqual('234243.23');
    });
  });
});
