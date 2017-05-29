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
	width: '320px',
	margin: 'auto',
	textAlign: 'center'
});
const spanStyle = style({
	height: '60px',
	lineHeight: '60px',
	verticalAlign: 'top',
	display: 'inline-block'
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
			<span className={spanStyle}>
				{rates && converter(rates[currencyOne], rates[currencyTwo], 1, 4)}
			</span>
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
	currencyOneValue: PropTypes.node,
	currencyTwo: PropTypes.string,
	currencyTwoValue: PropTypes.node,
	handleChangeOne: PropTypes.func,
	handleChangeTwo: PropTypes.func,
	rates: PropTypes.object
};

export default CurrencySelector;
