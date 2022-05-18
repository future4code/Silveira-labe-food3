import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { ScreenContainer, DivButton } from './Styled'
import { useNavigate } from 'react-router-dom';
import { updateAddress } from '../../services/profile';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { goBack } from '../../routes/coordinator';
import logo from '../../assets/logo.PNG'

export default function ProfileEditUserPage() {
  const navigate = useNavigate()

  const [form, handleInputChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })//puxando a estrutura do useState e do OnChange
  const onSubmitForm = (event) => {
    event.preventDefault()//importante para não mostrar a senha na url após o submit
    updateAddress(form, clear, navigate)
  }

  return (
    <ScreenContainer>
      <img src={logo} />
      <ArrowBackIosIcon onClick={() => goBack(navigate)}/>
      <form onSubmit={onSubmitForm}>
        <TextField //input do @mui com as próprias propriedades
          name={'street'}
          value={form.street}
          onChange={handleInputChange}
          label={'Logradouro'}
          variant={'outlined'}
          margin={'dense'}
          required
          fullWidth />
        <TextField //input do @mui com as próprias propriedades
          name={'number'}
          value={form.number}
          onChange={handleInputChange}
          label={'Número'}
          variant={'outlined'}
          margin={'dense'}
          required
          fullWidth
          type={'number'} />
        <TextField
          name={'neighbourhood'}
          value={form.neighbourhood}
          onChange={handleInputChange}
          label={'Bairro'}
          variant={'outlined'}
          margin={'dense'}
          required
          fullWidth
          type={'text'} />
        <TextField
          name={'city'}
          value={form.city}
          onChange={handleInputChange}
          label={'Cidade'}
          variant={'outlined'}
          margin={'dense'}
          required
          fullWidth
          type={'text'} />
        <TextField
          name={'state'}
          value={form.state}
          onChange={handleInputChange}
          label={'Estado'}
          variant={'outlined'}
          margin={'dense'}
          required
          fullWidth
          type={'text'} />
          <TextField
          name={'complement'}
          value={form.complement}
          onChange={handleInputChange}
          label={'Complemento'}
          variant={'outlined'}
          margin={'dense'}
          fullWidth
          type={'text'} />
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