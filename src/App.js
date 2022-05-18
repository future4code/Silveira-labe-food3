import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from '../src/routes/Router';
import theme from '../src/constants/theme';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App;
