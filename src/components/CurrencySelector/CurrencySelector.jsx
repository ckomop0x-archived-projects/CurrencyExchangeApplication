import React from 'react';

import DropdownSelector from '../DropdownSelector';
import { currencyConverter } from '../../helpers';
import styles from './currency-selector.module.scss';

const CurrencySelector = ({
  currencyOne,
  currencyTwo,
  handleChangeOne,
  handleChangeTwo,
  rates
}) => {
  return (
    <div className={styles.currencySelector}>
      <DropdownSelector
        currencyNames={Object.keys(rates)}
        currency={currencyOne}
        handleChange={handleChangeOne}
      />
      <span className={styles.currencyRate}>
        {currencyConverter(rates[currencyOne], rates[currencyTwo], 1, 4)}
      </span>
      <DropdownSelector
        currencyNames={Object.keys(rates)}
        currency={currencyTwo}
        handleChange={handleChangeTwo}
      />
    </div>
  );
};

export default React.memo(CurrencySelector);
