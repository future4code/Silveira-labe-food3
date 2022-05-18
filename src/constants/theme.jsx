import  {createTheme}  from '@material-ui/core/styles';
import {primaryColor, neutralColor, blackColor} from './colors';

const theme = createTheme({
    palette: {
    primary: {
      main: primaryColor
    },
    neutral: {
      main: neutralColor,
      contrastText: '#fff',
    },
    black: {
      main: blackColor,
      contrastText: '#fff',
    }
  },
});

export default theme;