export const converter = (currencyOne = 0, currencyTwo = 0, value = 0) => {
	const result = (Math.floor((value * (currencyTwo / currencyOne)) * 100)) / 100;
	return result;
};
