import { pow } from './';

export const converter = (currencyOne = 0, currencyTwo = 0, value = 0, floor = 2) => {
	const result = (Math.floor((value * (currencyTwo / currencyOne)) * pow(10, floor))) / pow(10, floor);
	return result;
};