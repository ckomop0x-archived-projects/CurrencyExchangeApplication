import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class AppBarContainer extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<AppBar
					title="Currency Exchange App"
					showMenuIconButton={false}
				  style={{textAlign: 'center'}}
				/>
			</MuiThemeProvider>
		);
	}
}

export default AppBarContainer;
