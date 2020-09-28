import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const DropdownSelector = ({ currency, handleChange, currencyNames }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCurrencySelect = (event) => {
    const currencyName = event.currentTarget.getAttribute('data-currencyname');
    handleChange(currencyName);
    handleClose();
  };

  return (
    <>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {currency}
      </Button>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {currencyNames.map((currencyName) => (
          <MenuItem
            key={currencyName}
            data-currencyname={currencyName}
            onClick={handleCurrencySelect}>
            {currencyName}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default React.memo(DropdownSelector);
