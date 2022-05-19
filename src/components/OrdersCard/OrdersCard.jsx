import * as React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardDiv } from './Styled';

const OrdersCard = ({ order }) => {
  return (
    <div>
      <CardDiv sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {order.restaurantName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            R${order.totalPrice},00
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardDiv>
      </div>
  )
}

export default OrdersCard