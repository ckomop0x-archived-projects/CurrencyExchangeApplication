import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
	converter
} from './helpers/';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it('Converter helper', () => {
	const currencyOne = 0.894786;
	const	currencyTwo = 1;
	const	value = 11.17;

	expect(converter(currencyOne, currencyTwo, 10)).toBe(value);
});