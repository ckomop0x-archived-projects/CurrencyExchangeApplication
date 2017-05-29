import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const DropdownSelector = (props) => {
	const currenciesNames = [];
	const {
		currency,
		handleChange,
		rates
	} = props;
	if (rates && Object.keys(rates)) {
		Object.keys(rates).map((rate) => {
			currenciesNames.push(
				<MenuItem
					key={rate}
					value={rate}
					primaryText={rate}
				/>);
			return currenciesNames;
		});
	}
	return (
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<DropDownMenu value={currency} onChange={handleChange}>
				{currenciesNames}
			</DropDownMenu>
		</MuiThemeProvider>
	);
};

DropdownSelector.propTypes = {
	currency: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	rates: PropTypes.object
};

export default DropdownSelector;
