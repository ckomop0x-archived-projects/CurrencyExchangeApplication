import React, { useEffect, useState } from 'react';
import config from './config';
import './App.css';
import { api, currencyConverter, inputFilter } from './helpers/';
import { AppBarContainer, CurrencyLine, CurrencySelector, Footer } from './components';

const App = () => {
  const [seconds, setSeconds] = useState(null);
  const [rates, setRates] = useState(null);
  const [timestamp, setTimestamp] = useState(0);
  const [currencyOne, setCurrencyOne] = useState('EUR');
  const [currencyTwo, setCurrencyTwo] = useState('USD');
  const [currencyOneValue, setCurrencyOneValue] = useState('');
  const [currencyTwoValue, setCurrencyTwoValue] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    const getData = api({
      url: `https://openexchangerates.org/api/latest.json?app_id=${config.API_KEY}`
    });

    getData
      .then(({ data: { rates, timestamp } }) => {
        setTimestamp(timestamp);
        setRates(rates);
      })
      .catch((err) => {
        setError({
          error: true,
          errorText: "Can't connect",
          message: `${err}`
        });
      });

    setInterval(() => {
      getData
        .then((result) => {
          setRates(result.data.rates);
        })
        .catch((err) => {
          setError({
            error: true,
            errorText: "Can't connect",
            message: `${err}`
          });
        });

      setSeconds({ seconds: this.state.seconds + 30 });
    }, config.DELAY);
  }, [seconds]);

  const changeCurrencyOneValue = (event) => {
    setCurrencyOneValue(inputFilter(event.target.value));
    setCurrencyTwoValue(
      currencyConverter(rates[currencyOne], rates[currencyTwo], inputFilter(event.target.value))
    );
  };

  const changeCurrencyTwoValue = (event) => {
    setCurrencyTwoValue(inputFilter(event.target.value));
    setCurrencyOneValue(
      currencyConverter(rates[currencyTwo], rates[currencyOne], inputFilter(event.target.value))
    );
  };

  const handleChangeOne = (value) => {
    setCurrencyOne(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

  const handleChangeTwo = (value) => {
    setCurrencyTwo(value);
    setCurrencyOneValue('');
    setCurrencyTwoValue('');
  };

  return (
    <div className="container">
      {rates && (
        <main className="App">
          <AppBarContainer />
          <CurrencySelector
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            rates={rates}
            handleChangeOne={handleChangeOne}
            handleChangeTwo={handleChangeTwo}
          />
          <CurrencyLine
            floatingLabelText={currencyOne}
            value={currencyOneValue}
            onChange={changeCurrencyOneValue}
          />
          <CurrencyLine
            floatingLabelText={currencyTwo}
            value={currencyTwoValue}
            onChange={changeCurrencyTwoValue}
          />
          <Footer time={timestamp} />
        </main>
      )}
    </div>
  );
};

export default App;
