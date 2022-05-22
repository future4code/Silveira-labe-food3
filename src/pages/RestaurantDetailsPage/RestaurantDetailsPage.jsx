import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography, Modal, InputLabel, FormControl, Select, MenuItem, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import GlobalStateContext from '../../context/global/GlobalStateContext'
import { findByLabelText } from '@testing-library/react'
import Footer from '../../components/Footer/Footer'
import { Container } from './styled'
import Header from '../../components/Header/Header'
import { goToFeed } from '../../routes/coordinator'
import Loading from '../../components/Loading/Loading'


function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    width: '250px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    maxWidth: 345,
    margin: 20,
    justifyContent: 'center',
  },
  media: {
    height: 140,
  },
  text: {
    color: "#B8B8B8"
  },
}));

const RestaurantDetailsPage = () => {
  const navigate = useNavigate();
  const { states, setters } = useContext(GlobalStateContext);
  const { cart, cartOrder, cartWithOrders, cartTotalValue, restaurantId } = states;
  const { setCart, setCartOrder, setCartTotalValue, setRestaurantId } = setters;
  const [open, setOpen] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [quantidade, setQuantidade] = useState("");

  const params = useParams()

  const handleQuantidade = (event) => {
    setQuantidade(event.target.value)
  }
  const restaurants = useRequestData([], ` ${BASE_URL}/restaurants`)
  const arrayRestaurants = restaurants.restaurants

  const restaurantDetail = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)
  
  const classes = useStyles();
  // const navigate = useNavigate()
  // useUnprotectedPage()

  //fazer map para pegar o restaurante e trazer o nome, imagem, endereco etc
  const cardRestaurant = arrayRestaurants && arrayRestaurants.map((restaurants) => {
    if (params.id === restaurants.id) {
      return <Card key={restaurants.id} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={restaurants.logoUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="p" style={{ color: "#E8222E" }}>
              {restaurants.name}
            </Typography>
            <Typography className={classes.text} variant="subtitle1" component="p" >
              {restaurants.category}
            </Typography>
            <Typography className={classes.text} variant="subtitle1" component="p" >
              {restaurants.deliveryTime}min - Frete R${restaurants.shipping},00
            </Typography>
            <Typography className={classes.text} variant="subtitle1" component="p" >
              {restaurants.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    }
  });

  const addItemToCart = (product) => {

    setRestaurantId(params.id);
    cartWithOrders.push(cart);
    const newItem = {
      id: product.id,
      quantity: quantidade
    }
    const index = cartOrder.products.findIndex((i) => i.id === product.id);
    const newCartOrder = cartOrder

    if (index === -1) {
      newCartOrder.products.push(newItem)
    } else {
      newCartOrder.products[index].quantity = newCartOrder.products[index].quantity + newItem.quantity;
    }

    cartTotalValue.push(product.price * newItem.quantity)

    // clearInput()
    setCartOrder(newCartOrder)

    handleClose()
  };

  const removeToCart = (id) => {
    cartWithOrders.pop(cart);
    const filterNewCartOrder = cartOrder.products && cartOrder.products.filter((product) => {
      return id !== product.id
    })
    setCartOrder({ ...cartOrder, products: filterNewCartOrder })
  }

  const showPopUpFunction = () => open ? setOpen(false) : setOpen(true)

  const handleOpen = (newItem) => {
    showPopUpFunction(newItem)
  };

  const handleClose = (newItem) => {
    showPopUpFunction(newItem)
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-description">
        Selecione a quantidade desejada
      </h4>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Quantidade</InputLabel>
        <Select id="outlined-basic" label="Quantidade" variant="outlined" size="small" value={quantidade} onChange={handleQuantidade}>
          <MenuItem value="">0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="primary" onClick={() => addItemToCart(cart)} size="small">Adicionar ao carrinho</Button>
    </div >
  );

  //fazer map  para popular com os cards das comidas
  const cardFood = restaurantDetail && restaurantDetail.restaurant && restaurantDetail.restaurant.products.map((foods) => {
    return (
      <RestaurantCard
        key={foods.id}
        product={foods}
        abreModal={handleOpen}
        setCart={setCart}
        removeToCart={removeToCart}
        quantidade={cartOrder.products.filter((id) => {
          return id.id.includes(foods.id)
        }).map((qtde)=> qtde.quantity)}
        
      />
    )
  })
  
  return (
    <>
      <Header hasBtn={true} hasTitle={true} texto="Restaurante" onclick={() => goToFeed(navigate)} />
      {cardRestaurant}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      
      {cardFood ? cardFood : <Loading/>}
    </>
  )
}
export default RestaurantDetailsPage