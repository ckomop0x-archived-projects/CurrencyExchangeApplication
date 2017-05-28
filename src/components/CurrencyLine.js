import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

class CurrencyLine extends Component {
	render() {
		const {
			floatingLabelText,
			value,
			onChange,
			onBlur
		} = this.props;
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<TextField
					style={{margin: 20}}
					floatingLabelText={floatingLabelText}
					type="number"
					value={value}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</MuiThemeProvider>
		);
	}
}

export default CurrencyLine;