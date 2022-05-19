import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const LogoImg = styled.img`
max-width: 200px;
max-height: 300px;
`
export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`
export const InfoAndButtonDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const DivButton = styled.div`
margin: 5px;
margin-left: 0;
width: 100%;
`

export const CardDiv = styled(Card)`
width: 84vw;
margin: 5px;
`
export const BorderBottom = styled.div`
border-bottom: 1px solid darkgray;
width: 84vw;
text-align: center;
margin-bottom: 15px;
`
export const StyledTítulo = styled(Typography)`
margin:0px;
`