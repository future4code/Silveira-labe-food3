import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { ScreenContainer, DivButton } from './Styled'
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../services/profile';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logo from '../../assets/logo.PNG'
import { goBack } from '../../routes/coordinator';


export default function ProfileEditUserPage() {
    const navigate = useNavigate()

    const [form, handleInputChange, clear] = useForm({ name: "", email: "", cpf: "" })//puxando a estrutura do useState e do OnChange
    const onSubmitForm = (event) => {
        event.preventDefault()//importante para não mostrar a senha na url após o submit
        updateProfile(form, clear)
        // console.log(form)

    }

    return (
        <ScreenContainer>
            <img src={logo} />
            <ArrowBackIosIcon onClick={() => goBack(navigate)} />
            <form onSubmit={onSubmitForm}>
                <TextField //input do @mui com as próprias propriedades
                    name={'name'}
                    value={form.name}
                    onChange={handleInputChange}
                    label={'Nome Completo'}
                    variant={'outlined'}
                    margin={'dense'}
                    required
                    fullWidth />
                <TextField //input do @mui com as próprias propriedades
                    name={'email'}
                    value={form.email}
                    onChange={handleInputChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    margin={'dense'}
                    required
                    fullWidth
                    type={'email'} />
                <TextField
                    name={'cpf'}
                    value={form.cpf}
                    onChange={handleInputChange}
                    label={'CPF'}
                    variant={'outlined'}
                    margin={'dense'}
                    required
                    fullWidth
                />
                <DivButton>
                    <Button
                        type={'submit'}
                        variant='contained'
                        color={'primary'}
                        margin={'normal'}
                        fullWidth>
                        Atualizar
                    </Button>
                </DivButton>
            </form>
        </ScreenContainer>
    )
}