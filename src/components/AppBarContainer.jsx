import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppBarContainer = () => (
  <AppBar
    position="relative"
    title=""
    style={{
      textAlign: 'center',
      background: '#004d9a',
      padding: 10
    }}>
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Exchange your Currency
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppBarContainer;
