import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { AppBar } from '@material-ui/core';

export const RestListContainer =styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px 70px 20px;
    justify-content: center;
`

export const SearchInput = styled(TextField)`
    width: 95% !important ;
`

export const AppBarstyled = styled(AppBar)`
    background-color: white;
`


