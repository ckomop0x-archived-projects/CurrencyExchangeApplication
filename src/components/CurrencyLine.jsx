import React from 'react';
import PropTypes from 'prop-types';
import { style } from 'typestyle';
import TextField from '@material-ui/core/TextField';

const CurrencyLine = ({ value, onChange }) => {
  const className = style({
    margin: 20,
    width: '90% !important',
    boxSizing: 'border-box'
  });

  return <TextField className={className} type="text" value={value} onChange={onChange} />;
};

CurrencyLine.propTypes = {
  floatingLabelText: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func.isRequired
};

export default React.memo(CurrencyLine);
