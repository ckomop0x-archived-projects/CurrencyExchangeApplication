import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const AppBarContainer = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AppBar
        title="Exchange your Currency"
        showMenuIconButton={false}
        style={{
          textAlign: 'center',
          background: '#004d9a'
        }}
      />
    </MuiThemeProvider>
  );
};

export default AppBarContainer;
