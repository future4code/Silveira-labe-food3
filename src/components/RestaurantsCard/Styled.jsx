import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'

export const CardMargin = styled(Card)`
    margin: 10px;
    border-radius: 10px !important;
`

export const CardActionsSpace = styled(CardActions)`
    justify-content: space-between;
`

export const ButtonVerMais = styled.button`
    position: absolute;
    bottom: 3.8rem; 
    right: 1rem;
    z-index: 1;
`

