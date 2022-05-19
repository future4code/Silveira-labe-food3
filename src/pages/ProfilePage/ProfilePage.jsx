import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BorderBottom, CardDiv, InfoAndButtonDiv, InfoContainer, ScreenContainer, StyledTítulo } from './Styled'
import { BASE_URL } from '../../constants/urls'
import OrdersCard from '../../components/OrdersCard/OrdersCard'
import { goToProfileEditAdress, goToProfileEditUser } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../../assets/logo.PNG'
import EditIcon from '@mui/icons-material/Edit';
import Loading from '../../components/Loading/Loading'

const ProfilePage = () => {
  const navigate = useNavigate()
  const profile = useRequestData({}, `${BASE_URL}/profile`)
  const orders = useRequestData({}, `${BASE_URL}/orders/history`)

  const orderArray = orders.orders

  const ordersMap = orderArray && orderArray.map((order) => {
    return (
      <div key={order.createdAt}>
        <OrdersCard order={order} />
      </div>
    )
  })

  return (
    <ScreenContainer>
      <img src={logo} />
      <InfoContainer>

        {profile.user ? (<>
          <Typography gutterBottom variant="h6" component="div">
            Informações do Perfil
          </Typography>
          <CardDiv sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <InfoAndButtonDiv>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {profile.user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {profile.user.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {profile.user.cpf}
                    </Typography>
                </CardContent>
                <EditIcon onClick={() => goToProfileEditUser(navigate)} />
              </InfoAndButtonDiv>
            </CardActionArea>
          </CardDiv>




          <CardDiv variant='outlined' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <InfoAndButtonDiv>
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    Endereço
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.user.address}
                  </Typography>
                </CardContent>
                <EditIcon onClick={() => goToProfileEditAdress(navigate)} />
              </InfoAndButtonDiv>
            </CardActionArea>
          </CardDiv>
        </>

        ) :

        <Loading/>}

      </InfoContainer>



      <InfoContainer>
        <BorderBottom>
          <StyledTítulo gutterBottom variant="h6" component="div">
            Histórico de Pedidos
          </StyledTítulo>
        </BorderBottom>
        {ordersMap && ordersMap.length > 0 ? ordersMap : <p>Você não realizou nenhum pedido</p>}
        {/* <OrdersCard /> */}
      </InfoContainer>
    </ScreenContainer>
  )
}

export default ProfilePage