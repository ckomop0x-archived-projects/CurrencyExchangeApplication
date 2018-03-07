import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import config from './config';
import './App.css';

// Helpers
import {
    api,
    currencyConverter,
    inputFilter
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
            currencyOne: 'EUR',
            currencyTwo: 'USD',
            currencyOneValue: '',
            currencyTwoValue: '',
        };
    }

    componentDidMount() {
        const options = {
            method: this.state.method,
            url: this.state.url
        };
        const getData = api(options);

        /**
         * Receive currencies exchange rates
         * @type {Promise.<*>}
         */
        getData
            .then((result) => {
                this.setState({
                    rates: result.data.rates,
                    time: result.data.timestamp
                });
            })
            .catch((err) => {
                this.setState({
                    error: true,
                    errorText: 'Can\'t connect',
                    message: `${err}`
                });
            });

        setInterval(() => {
            getData.then((result) => {
                this.setState({
                    rates: result.data.rates
                });
            }).catch((err) => {
                this.setState({
                    error: true,
                    errorText: 'Can\'t connect',
                    message: `${err}`
                });
            });

            this.setState({seconds: this.state.seconds + 30});
        }, config.DELAY);
    }

    changeCurrencyOneValue(event) {
        const {currencyOne, currencyTwo, rates} = this.state;

        this.setState({
            currencyOneValue: inputFilter(event.target.value)
        });
        this.setState({
            currencyTwoValue: currencyConverter(rates[currencyOne], rates[currencyTwo], inputFilter(event.target.value))
        });
    }

    changeCurrencyTwoValue(event) {
        const {currencyOne, currencyTwo, rates} = this.state;
        this.setState({
            currencyTwoValue: inputFilter(event.target.value)
        });
        this.setState({
            currencyOneValue: currencyConverter(rates[currencyTwo], rates[currencyOne], inputFilter(event.target.value))
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
        const {currencyOne, currencyTwo, currencyOneValue, currencyTwoValue, rates, time} = this.state;

        return (
            <div className="container">
                <div className="App">
                    <AppBarContainer />
                    <CurrencySelector currencyOne={currencyOne}
                                      currencyTwo={currencyTwo}
                                      currencyOneValue={currencyOneValue}
                                      currencyTwoValue={currencyTwoValue}
                                      rates={rates}
                                      handleChangeOne={this.handleChangeOne.bind(this)}
                                      handleChangeTwo={this.handleChangeTwo.bind(this)} />
                    <CurrencyLine
                        floatingLabelText={currencyOne}
                        value={currencyOneValue}
                        onChange={this.changeCurrencyOneValue.bind(this)} />
                    <CurrencyLine
                        floatingLabelText={currencyTwo}
                        value={currencyTwoValue}
                        onChange={this.changeCurrencyTwoValue.bind(this)} />
                    <Footer time={time} />
                </div>
            </div>
        );
    }
}

export default App;
