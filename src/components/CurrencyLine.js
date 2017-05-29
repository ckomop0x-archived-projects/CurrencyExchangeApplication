import React from 'react';
import PropTypes from 'prop-types';
import { style } from 'typestyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

const CurrencyLine = (props) => {
	const className = style({
		margin: 20,
		width: '90% !important',
		boxSizing: 'border-box'
	});
	const {
		floatingLabelText,
		value,
		onChange,
		onBlur
	} = props;
	return (
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<TextField
				className={className}
				floatingLabelText={floatingLabelText}
				type="number"
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</MuiThemeProvider>
	);
};

CurrencyLine.propTypes = {
	floatingLabelText: PropTypes.string,
	value: PropTypes.node,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func.isRequired
};

export default CurrencyLine;