import React, {useState} from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import RestaurantsCard from '../../components/RestaurantsCard/RestaurantsCards'
import { RestListContainer } from './Styled'
import SearchHomePage from './SearchHomePage'
import { goToRestaurantDetails } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import TabsButton from './TabsButton'
import { goToLogin } from '../../routes/coordinator'


const HomePage = () => {
  useProtectedPage()
  const navigate = useNavigate()

  const restaurants = useRequestData([],` ${BASE_URL}/restaurants`)
  const arrayRestaurants = restaurants.restaurants

  const [search, setSearch] = useState("")

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }


  const restaurantsCard = arrayRestaurants && arrayRestaurants
  .filter((res) =>{
    return res.name.toLowerCase().includes(search.toLowerCase()) 
  })
  .map((res) =>{
    return (
      <RestaurantsCard
      onClick={()=>goToRestaurantDetails(navigate, res.id)}
      key={res.id}
      logoUrl={res.logoUrl}
      name={res.name}
      deliveryTime={res.deliveryTime}
      shipping={res.shipping}
      />
    )
  })
 
  return (
    <RestListContainer>
      <SearchHomePage
      onChange={onChangeSearch}
      value={search}
      />
      <TabsButton
      />
      {restaurantsCard ? restaurantsCard : <Loading/>}
      
    </RestListContainer>
  )
}

export default HomePage