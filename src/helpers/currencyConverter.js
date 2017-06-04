import { pow } from './';
/**
 *
 * @param currencyOne
 * @param currencyTwo
 * @param value
 * @param floor
 * @returns {number}
 */
export const currencyConverter = (currencyOne = 1, currencyTwo = 1, value = 1, floor = 2) => (
  (Math.floor((value * (currencyTwo / currencyOne)) * pow(10, floor))) / pow(10, floor)
);
