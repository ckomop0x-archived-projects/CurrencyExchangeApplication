import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Helpers
import api from './helpers/api';

// Compoponents
// import CurrencyTab from './components/CurrencyTab';
// import CurrencyMenu from './components/CurrencyMenu';
import AppBarContainer from './components/AppBarContainer'
import CurrencyLine from './components/CurrencyLine'

// Init Tap event
injectTapEventPlugin();

class App extends Component {
	/**
	 * Set default application state
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			method: 'GET',
			url: 'https://openexchangerates.org/api/latest.json?app_id=33f0f3ee6c77474f9f929749f5286615',
			seconds: 0,
			currencyOne: 'EUR',
			currencyTwo: 'USD',
			currencyOneValue: '',
			currencyTwoValue: '',
		};
	}
	changeCurrencyOneValue(event) {

		console.log(event);

		let value = '';

		const tempValue = event.target.value.split('.');
		console.log(event.target.value, tempValue, tempValue.length);

		if (tempValue.length > 1 && tempValue[1].length > 1) {
			console.log(tempValue);
			value = [tempValue[0], tempValue[1]].join('.');
			console.log(value);
			// value = parseInt(tempValue[0]) + parseInt(tempValue[1]);
			this.setState({currencyOneValue: value});
		} else {
			value = parseInt(tempValue[0], 10);
			this.setState({currencyOneValue: value});
			console.log(this.state.currencyOneValue, this.state.rates.EUR);

		}
		this.setState({currencyTwoValue: (this.state.currencyOneValue * (1/this.state.rates.EUR))})



		// console.log(event.target.value.split('.'));
		// console.log(event.target, typeof(event.target.value));

		// const fomattedEvent = (event.target.value).toFixed(2);
		// console.log('event', event, fomattedEvent);
		// this.setState({currencyOneValue: 100});
		// if (event.target.value < 0 || event.target.value === '' || event.target.value === 0) {
		// 	this.setState({currencyOneValue: 100});
		// }
	}

	changeCurrencyTwoValue(event) {
		console.log(event.target);
		if (event.target.value < 0 || event.target.value === '' || event.target.value === 0) {
			event.target.value = 0;
		}
	}

	componentDidMount() {
		const options = {
			method: this.state.method,
			url: this.state.url,

		};

		/**
		 * Receive currencies exchange rates
		 */
		const getData = api(options);
		getData
			.then(result => {
				// console.log(result);
				this.setState({
						rates: {
							USD: 1,
							EUR: result.data.rates.EUR,
							GBP: result.data.rates.GBP
						}
					});
			})
			.catch(err => {
				console.log(err);
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
  render() {
    return (
      <div className="App" style={{
	      maxWidth: 600,
	      margin: '0 auto',
	      boxShadow: '0 0 2px 4px hsla(0, 0%, 0%, 0.12)'
      }}>
	      <AppBarContainer />
	      <div style={{
	      	textAlign: 'center',
		      margin: 20
	      }}>1 EUR =  {this.state.rates &&  this.state.rates.EUR}$</div>
	      <CurrencyLine
		      floatingLabelText={this.state.currencyOne}
		      value={this.state.currencyOneValue}
		      onChange={this.changeCurrencyOneValue.bind(this)}
		      onBlur={this.changeCurrencyOneValue.bind(this)}
	      />
	      <CurrencyLine
		      floatingLabelText={this.state.currencyTwo}
		      value={this.state.currencyTwoValue}
		      onChange={this.changeCurrencyTwoValue.bind(this)}
		      onBlur={this.changeCurrencyTwoValue.bind(this)}
	      />
      </div>
    );
  }
}

export default App;
