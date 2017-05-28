import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrencyMenu from './components/CurrencyMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('CurrencyMenu renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<CurrencyMenu />
		</MuiThemeProvider>, div);
});