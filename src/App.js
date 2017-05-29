import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import config from './config';
import './App.css';

// Helpers
import {
	api,
	converter
} from './helpers/';

// Compoponents
import AppBarContainer from './components/AppBarContainer';
import CurrencyLine from './components/CurrencyLine';
import CurrencySelector from './components/CurrencySelector';
import Footer from './components/Footer';

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
			url: `https://openexchangerates.org/api/latest.json?app_id=${config.API_KEY}`,
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
		 * @type {Promise.<*>}
		 */
		const getData = api(options);
		getData
			.then((result) => {
				this.setState({
					rates: result.data.rates,
					time: result.data.timestamp
				});
			})
			.catch((err) => {
				console.log(err);
			});

		setInterval(() => {
			getData
				.then((result) => {
					console.log(`Passed ${this.state.seconds} seconds`, result);
					this.setState({
						rates: result.data.rates
					});
				})
				.catch((err) => {
					console.log(err);
				});
			this.setState({ seconds: this.state.seconds + 30 });
		}, config.DELAY);
	}

	changeCurrencyOneValue(event) {
		this.setState({
			currencyOneValue: event.target.value
		});
		this.setState({
			currencyTwoValue:
				converter(this.state.rates[this.state.currencyOne], this.state.rates[this.state.currencyTwo], event.target.value)
		});
	}

	changeCurrencyTwoValue(event) {
		this.setState({
			currencyTwoValue: event.target.value
		});
		this.setState({
			currencyOneValue: converter(this.state.rates[this.state.currencyTwo], this.state.rates[this.state.currencyOne], event.target.value)
		});
	}

	handleChangeOne(event, index, value) {
		this.setState({
			currencyOne: value
		});
		this.setState({
			currencyTwoValue: converter(this.state.rates[this.state.currencyOne], this.state.rates[this.state.currencyTwo], this.state.currencyOneValue)
		});
	}

	handleChangeTwo(event, index, value) {
		this.setState({
			currencyTwo: value
		});
		this.setState({
			currencyOneValue: converter(this.state.rates[this.state.currencyTwo], this.state.rates[this.state.currencyOne], this.state.currencyTwoValue)
		});
	}

	render() {
		const {
			currencyOne,
			currencyTwo,
			currencyOneValue,
			currencyTwoValue,
			rates
		} = this.state;
		return (
			<div className="container">
				<div className="App">
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
					/>
					<CurrencyLine
						floatingLabelText={currencyTwo}
						value={currencyTwoValue}
						onChange={this.changeCurrencyTwoValue.bind(this)}
					/>
					<Footer
						time={this.state.time}
					/>
				</div>
			</div>

		);
	}
}

export default App;
