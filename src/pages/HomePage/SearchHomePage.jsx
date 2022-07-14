import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { SearchInput } from './Styled';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SearchHomePage = (props) => {

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <SearchInput
      onChange={props.onChange}
      value={props.form}
      type={"text"}
      id={"outlined-basic"} 
      label={"Restaurante"} 
      variant={"outlined"}
      />
    </form>
  );
}

export default SearchHomePage
