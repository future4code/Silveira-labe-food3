import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react'
// import {UnprotectedPage} from './UnprotectedPage'
// import { useParams } from 'react-router-dom'

const RestaurantDetailsPage = () => {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantDetail, setRestaurantDetail] = useState([])
  const [adicionarItem,setAdicionarItem] = useState([])
  const [removerItem,setRemoverItem] = useState ([])

  // const navigate = useNavigate()
  // useUnprotectedPage()

  // const params = useParams()

  //pegar endpoint Get Restaurant 
  useEffect(() => {
    // const token = localStorage.getItem('token')
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpqZXJMOXA3UXJoUEw1VWlSS0F4IiwibmFtZSI6IkF0cm9kZXYiLCJlbWFpbCI6ImFzdHJvZGV2QGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExMTMyMTU0NjU0NjUiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiYXNkYXNkLCBhc2Rhc2QsIGFzZGFzZCAtIGFzZGFzZCIsImlhdCI6MTY1MjgxNDQxOX0.2xpUU2GzsW08u47MB7Nq4iZ1Y3SAO8zVlZNIo0YfU48'
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log('Restaurantes', response.data.restaurants)
        setRestaurants(response.data.restaurants)
      })
      .catch((error) => {
        console.log('Deu Erro!!', error.response)
      });
  }, []);

  //pegar endpoint Get Restaurant Detail 
  useEffect(() => {
    // const token = localStorage.getItem('token')
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpqZXJMOXA3UXJoUEw1VWlSS0F4IiwibmFtZSI6IkF0cm9kZXYiLCJlbWFpbCI6ImFzdHJvZGV2QGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExMTMyMTU0NjU0NjUiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiYXNkYXNkLCBhc2Rhc2QsIGFzZGFzZCAtIGFzZGFzZCIsImlhdCI6MTY1MjgxNDQxOX0.2xpUU2GzsW08u47MB7Nq4iZ1Y3SAO8zVlZNIo0YfU48'

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/1`,
        {
          headers: {
            auth: token
          }
        })
      .then((response) => {
        console.log('Restaurante', response.data.restaurant.products)
        setRestaurantDetail(response.data.restaurant.products)
      })
      .catch((error) => {
        console.log('erro!!', error.response.data.message)
      });
  }, []);

  //fazer map  para popular com os cards das comidas
  const cardFood = restaurantDetail && restaurantDetail.map((foods) => {
    return (
      <RestaurantCard
        key={foods.id}
        photoUrl={foods.photoUrl}
        name={foods.name}
        description={foods.description}
        price={foods.price}

        
        // adicionar={() => onClickAdicionar(foods.id)}
        // remover={() => onClickRemover(foods.id)}
      />
    )
  })
  adicionarItem = (id) => {
    const novoItem = [...adicionarItem,id]
    setAdicionarItem({adicionarItem: novoItem})
  }
  removerItem = (id) => {
    const novoItem = remover.filter((id)=>{
      return(
        id !== id 
      )
    })
    setRemoverItem({removerItem: novoItem})
  }

  //  pegar  o enpoint Place order ( esta parte precisa verificar)
  // const placeOrder = () => {
  //   const [placeorder, setplaceorder] = useState([])

  // }
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   const body = { "products: ${id}/quantity"}// "este parte não to conseguindo passar"
  //   axios
  //     .post(
  //       `https://us-central1-missao-newton.cloudfunctions.net/${fourFoodA}/restaurants/:restaurantId/order/`,
  //       {
  //         headers: {
  //           auth: token
  //         }
  //       }
  //     )
  //     .then((response) => {
  //       console.log(res)
  //       setplaceorder(response.data.placeorder)
  //     })
  //     .catch((error) => {
  //       console.log('Deu Erro!!', error.response)
  //     });
  // }, []);


  return (
    <div>
      {restaurants[0].name}
      <div>
        Informaçoes do Restaurante + foto
        <img src={restaurants[0].logoUrl}></img>
      </div>
      {cardFood}

    </div>
  )
}

export default RestaurantDetailsPage