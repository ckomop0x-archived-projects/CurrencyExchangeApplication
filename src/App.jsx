import React, { Component } from 'react';
import config from './config';
import './App.css';
import { api, currencyConverter, inputFilter } from './helpers/';
import AppBarContainer from './components/AppBarContainer';
import CurrencyLine from './components/CurrencyLine';
import CurrencySelector from './components/CurrencySelector';
import Footer from './components/Footer';

class App extends Component {
  state = {
    method: 'GET',
    url: `https://openexchangerates.org/api/latest.json?app_id=${config.API_KEY}`,
    seconds: 0,
    currencyOne: 'EUR',
    currencyTwo: 'USD',
    currencyOneValue: '',
    currencyTwoValue: ''
  };

  componentDidMount() {
    const getData = api({
      method: this.state.method,
      url: this.state.url
    });

    getData
      .then(({ data: { rates, timestamp } }) => {
        this.setState({
          rates,
          timestamp
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          errorText: "Can't connect",
          message: `${err}`
        });
      });

    setInterval(() => {
      getData
        .then((result) => {
          this.setState({
            rates: result.data.rates
          });
        })
        .catch((err) => {
          this.setState({
            error: true,
            errorText: "Can't connect",
            message: `${err}`
          });
        });

      this.setState({ seconds: this.state.seconds + 30 });
    }, config.DELAY);
  }

  changeCurrencyOneValue(event) {
    const { currencyOne, currencyTwo, rates } = this.state;

    this.setState({
      currencyOneValue: inputFilter(event.target.value)
    });
    this.setState({
      currencyTwoValue: currencyConverter(
        rates[currencyOne],
        rates[currencyTwo],
        inputFilter(event.target.value)
      )
    });
  }

  changeCurrencyTwoValue(event) {
    const { currencyOne, currencyTwo, rates } = this.state;
    this.setState({
      currencyTwoValue: inputFilter(event.target.value)
    });
    this.setState({
      currencyOneValue: currencyConverter(
        rates[currencyTwo],
        rates[currencyOne],
        inputFilter(event.target.value)
      )
    });
  }

  handleChangeOne(event, index, value) {
    this.setState({
      currencyOne: value
    });
    this.setState({
      currencyOneValue: '',
      currencyTwoValue: ''
    });
  }

  handleChangeTwo(event, index, value) {
    this.setState({
      currencyTwo: value
    });
    this.setState({
      currencyOneValue: '',
      currencyTwoValue: ''
    });
  }

  render() {
    const {
      currencyOne,
      currencyTwo,
      currencyOneValue,
      currencyTwoValue,
      rates,
      timestamp
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
          <Footer time={timestamp} />
        </div>
      </div>
    );
  }
}

export default App;
