import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Helpers
import {
	api,
	converter
} from './helpers/';

// Compoponents
import AppBarContainer from './components/AppBarContainer';
import CurrencyLine from './components/CurrencyLine';
import CurrencySelector from './components/CurrencySelector';

// Init Tap event
injectTapEventPlugin();

class App extends Component {
	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			method: 'GET',
			url: 'https://openexchangerates.org/api/latest.json?app_id=33f0f3ee6c77474f9f929749f5286615',
			seconds: 0,
			currencyOne: 'RUB',
			currencyTwo: 'EUR',
			currencyOneValue: '',
			currencyTwoValue: '',
		};
	}

	componentDidMount() {
		const options = {
			method: this.state.method,
			url: this.state.url
		};

		/**
		 * Receive currencies exchange rates
		 */
		const getData = api(options);
		getData
			.then((result) => {
				// console.log(result);
				this.setState({
					rates: result.data.rates
				});
			})
			.catch((err) => {
				// console.log(err);
			});

		// setInterval(() => {
		// 	getData
		// 		.then(result => {
		// 			console.log(`Passed ${this.state.seconds} seconds`, result);
		// 			this.setState({
		// 				rates: {
		// 					USD: 1,
		// 					EUR: result.data.rates.EUR,
		// 					GBP: result.data.rates.GBP
		// 				}
		// 			});
		// 		})
		// 		.catch(err => {
		// 			console.log(err);
		// 		});
		// 	this.setState({seconds: this.state.seconds + 30});
		// }, 30000);
	}

	changeCurrencyOneValue(event) {
		this.setState({ currencyOneValue: event.target.value });
		this.setState({ currencyTwoValue: converter(this.state.rates[this.state.currencyOne], this.state.rates[this.state.currencyTwo], event.target.value) });
	}

	changeCurrencyTwoValue(event) {
		this.setState({ currencyTwoValue: event.target.value });
		this.setState({ currencyOneValue: converter(this.state.rates[this.state.currencyTwo], this.state.rates[this.state.currencyOne], event.target.value) });
	}

	handleChangeOne = (event, index, value) => {
		console.log(event, index, value, this);
		console.log(value, this.state.currencyOneValue)
		this.setState({
			currencyOne: value
		});
		this.setState({
			currencyTwoValue: converter(this.state.rates[this.state.currencyOne], this.state.rates[this.state.currencyTwo], this.state.currencyOneValue)
		});
	};
	handleChangeTwo = (event, index, value) => {
		console.log(event, index, value, this);
		console.log(value, this.state.currencyTwoValue)
		this.setState({
			currencyTwo: value
		});
		this.setState({
			currencyOneValue: converter(this.state.rates[this.state.currencyTwo], this.state.rates[this.state.currencyOne], this.state.currencyTwoValue)
		});
	};

	render() {
		const {
			currencyOne,
			currencyTwo,
			currencyOneValue,
			currencyTwoValue,
			rates
		} = this.state;
		return (
			<div
				style={{
					maxWidth: 600,
					margin: '0 auto',
					boxShadow: '0 0 2px 4px hsla(0, 0%, 0%, 0.12)'
				}}
				className="App"

			>
				<AppBarContainer />
				<CurrencySelector
					currencyOne={currencyOne}
					currencyTwo={currencyTwo}
					currencyOneValue={currencyOneValue}
					currencyTwoValue={currencyTwoValue}
					rates={rates}
					handleChangeOne={this.handleChangeOne.bind(this)}
					handleChangeTwo={this.handleChangeTwo.bind(this)}
				/>
				<CurrencyLine
					floatingLabelText={currencyOne}
					value={currencyOneValue}
					onChange={this.changeCurrencyOneValue.bind(this)}
					onBlur={this.changeCurrencyOneValue.bind(this)}
				/>
				<CurrencyLine
					floatingLabelText={currencyTwo}
					value={currencyTwoValue}
					onChange={this.changeCurrencyTwoValue.bind(this)}
					onBlur={this.changeCurrencyTwoValue.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
