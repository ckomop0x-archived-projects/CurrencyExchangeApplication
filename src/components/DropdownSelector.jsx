import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const DropdownSelector = (props) => {
  const currenciesNames = [];
  const { currency, handleChange, rates } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleChange(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    handleChange(event.currentTarget);
  };

  if (rates && Object.keys(rates)) {
    Object.keys(rates).map((rate) => {
      currenciesNames.push(
        <MenuItem key={rate} value={rate}>
          {rate}
        </MenuItem>
      );
      return currenciesNames;
    });
  }
  return (
    <div>
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        // keepMounted
        onClose={handleClose}
        value={currency}
        onChange={handleChange}
        open={true}>
        {currenciesNames}
      </Menu> */}
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {currency}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {rates &&
            Object.keys(rates).map((rate) => (
              <MenuItem key={rate} value={rate}>
                {rate}
              </MenuItem>
            ))}
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

DropdownSelector.propTypes = {
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  rates: PropTypes.object
};

export default DropdownSelector;
