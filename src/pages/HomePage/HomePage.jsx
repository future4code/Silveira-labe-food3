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
  const [tabs, setTabs] = useState("")

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }
  console.log(tabs)

  const onClickTodos = () => {
    setTabs("")
  }
  const onClickArabe = () => {
    setTabs("Árabe")
  }
  const onClickAsiatica = () => {
    setTabs("Asiática")
  }
  const onClickHamburguer = () => {
    setTabs("Hamburguer")
  }
  const onClickItaliana = () => {
    setTabs("Italiana")
  }
  const onClickSorvetes = () => {
    setTabs("Sorvetes")
  }
  const onClickCarnes = () => {
    setTabs("Carnes")
  }
  const onClickBaiana = () => {
    setTabs("Baiana")
  }
  const onClickPetiscos = () => {
    setTabs("Petiscos")
  }
  const onClickMexicana = () => {
    setTabs("Mexicana")
  }



  const restaurantsCard = arrayRestaurants && arrayRestaurants
  .filter((res) =>{
    return res.name.toLowerCase().includes(search.toLowerCase()) 
  })
  .filter((res) => {
    return res.category.toLowerCase().includes(tabs.toLowerCase())
  })
  .map((res) =>{
    console.log(res)
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
      onClickTodos={onClickTodos}
      onClickArabe={onClickArabe}
      onClickAsiatica={onClickAsiatica}
      onClickHamburguer={onClickHamburguer}
      onClickItaliana={onClickItaliana}
      onClickSorvetes={onClickSorvetes}
      onClickCarnes={onClickCarnes}
      onClickBaiana={onClickBaiana}
      onClickPetiscos={onClickPetiscos}
      onClickMexicana={onClickMexicana}
      />
      {restaurantsCard ? restaurantsCard : <Loading/>}
      
    </RestListContainer>
  )
}

export default HomePage