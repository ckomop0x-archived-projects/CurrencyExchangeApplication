import React from 'react';
import PropTypes from 'prop-types';
import { style } from 'typestyle';

// Components
import DropdownSelector from './DropdownSelector';

// Helpers
import {
	converter
} from '../helpers/';

const className = style({
	width: 200,
	margin: 'auto'
});

const CurrencySelector = (props) => {
	const {
		currencyOne,
		currencyTwo,
		handleChangeOne,
		handleChangeTwo,
		currencyOneValue,
		currencyTwoValue,
		rates
	} = props;

	return (
		<div className={className}>
			<DropdownSelector
				rates={rates}
				currency={currencyOne}
				handleChange={handleChangeOne}
				currencyOneValue={currencyOneValue}
				currencyTwoValue={currencyTwoValue}
			/>
			= {rates && converter(rates[currencyOne], rates[currencyTwo], 1, 4)}
			<DropdownSelector
				rates={rates}
				currency={currencyTwo}
				handleChange={handleChangeTwo}
				currencyOneValue={currencyOneValue}
				currencyTwoValue={currencyTwoValue}
			/>
		</div>
	);
};


CurrencySelector.propTypes = {
	currencyOne: PropTypes.string,
	currencyOneValue: PropTypes.string,
	currencyTwo: PropTypes.string,
	currencyTwoValue: PropTypes.string,
	handleChangeOne: PropTypes.func,
	handleChangeTwo: PropTypes.func,
	rates: PropTypes.object
};

export default CurrencySelector;
