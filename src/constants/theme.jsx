import { createTheme } from '@material-ui/core/styles'
import { primaryColor, neutralColor } from './colors'

const theme = createTheme ({
    palette:{
        primary:{
            main: primaryColor,
            contrastText: "white"
        },
        text:{
            primary: neutralColor
        }
    },
    props: {
        // Nome do componente ⚛️
        MuiCardBase: {
          // As propriedades padrão para mudar
          disableRipple: true, // Sem efeito cascata, em toda a aplicação 💣!
        }
    }
})

export default theme