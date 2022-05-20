import React from 'react';
import Router from '../src/routes/Router';
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles' 
import GlobalState from "./context/global/GlobalState";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  )
}

export default App;
