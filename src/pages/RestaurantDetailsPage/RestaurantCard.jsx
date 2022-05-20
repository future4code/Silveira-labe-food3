import { Card, CardContent, CardMedia, Typography, useTheme, makeStyles, Button, TextField } from '@material-ui/core';
import React, { useContext } from 'react'
import { colors } from '@material-ui/core';
import GlobalStateContext from '../../context/global/GlobalStateContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 345,
    margin: 20,
    justifyContent: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cover: {
    width: 100,
    display: 'flex',
    alignSelf: 'center',
  },
}));

const RestaurantCard = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  const { photoUrl, name, description, price, amount ,id} = props.product
  const { states, setters } = useContext(GlobalStateContext);
  const { cart, cartOrder } = states;
  const productsExist = cartOrder.products.some((product)=>id === product.id) 
  console.log(props.quantidade)
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.cover}
          component="img"
          height="140"
          image={photoUrl}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="p" style={{color: "#E8222E"}}>
              {name}
            </Typography>
            <Typography variant="subtitle1" style={{color: "#B8B8B8", fontSize: 12}}>
              {description}
            </Typography>
            <Typography variant="subtitle1" style={{fontWeight: 'bold', color: "black", lineHeight: '3rem'}}>
              R${price}
            </Typography>
          </CardContent>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="outlined">qnt: </Typography>
          {productsExist ?  <Button variant="outlined" color="primary" size="small" 
          onClick={() => props.removeToCart(id)} style={{ width: 20 }}>
            remover
          </Button> :
          <Button variant="outlined" color="primary" size="small" 
          onClick={() =>{ props.setCart({id:props.product.id, photoUrl:props.product.photoUrl, name:props.product.name, description:props.product.description, price:props.product.price}); props.abreModal(props.product)}} style={{ width: 20 }}>
            Add
          </Button>}
        </div>
      </Card>
    </div>
  )
}
export default RestaurantCard