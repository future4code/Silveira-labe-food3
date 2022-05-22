import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { goToFeed } from '../../routes/coordinator';
import RestaurantCard from '../RestaurantDetailsPage/RestaurantCard';
import { ContainerEndereco, ContainerPedido, ContainerFinalizar, Label, Endereco, ContainerFrete, ContainerSubtotal, Frete, SubtotalTitulo, SubtotalValor, ContainerFormaPagamento, FormaPgto, SelectPgto, StyledButton, ContainerEnderecoRestaurante, LabelRestaurante, LabelEnderecoRestaurante, LabelTempoEntrega, ContainerItensPedido, CarrinhoVazio, PageContainer } from './Styled';
import GlobalStateContext from '../../context/global/GlobalStateContext';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls'
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const CartPage = (props) => {
  const navigate = useNavigate();
  const profile = useRequestData({}, `${BASE_URL}/profile`)
  const { states, setters } = useContext(GlobalStateContext);

  const { restaurantId, cartOrder, cartWithOrders, cartTotalValue } = states;
  const { setCartOrder, setCartWithOrders, setCartTotalValue } = setters;

  const [pagamento, setPagamento] = useState('debito');

  const handleOnChange = (event) => {
    setPagamento(event.target.value);
  }

  /* FALTAR IMPLEMENTAR A FUNÇÃO ABAIXO, CONFIRMARCOMPRA PARA TERMINAR A TELA DE CARRINHO. */

  const confirmarCompra = () =>{
    setCartOrder({...cartOrder, paymentMethod: pagamento})
    const HEADERS = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios
      .post(`${BASE_URL}/restaurants/${restaurantId}/order`, cartOrder, HEADERS)
      .then((res) => {
        goToFeed(navigate);
      })
      .catch((err) => alert("Não foi possível finalizar o pedido. Tente novamente mais tarde!"));
  }
    console.log(cartOrder);

  const cardFood = cartWithOrders && cartWithOrders.map((food) => {
    return (
      <RestaurantCard
        key={food.id}
        product={food}
        quantidade={cartOrder.products.filter((order) => {
          return order.id.includes(food.id)
        }).map((qtde)=> qtde.quantity)}
      />
    )
  })
  
  const restaurants = useRequestData([], ` ${BASE_URL}/restaurants`);
  const arrayRestaurants = restaurants.restaurants;

  const infoRestaurante = restaurants && arrayRestaurants && arrayRestaurants.filter((restaurant)=>{
    if(restaurant.id === restaurantId){
      return restaurant;
    }
  })[0];

  const subtotalComFrete = infoRestaurante && infoRestaurante.shipping !== undefined ? (cartTotalValue !== 0 && cartTotalValue.reduce((accumulator, curr) => accumulator + curr))+(infoRestaurante && infoRestaurante.shipping) : 0;


  return (
    <>
      <PageContainer>
      <Header hasBtn={false} hasTitle={true} texto="Meu Carrinho" onclick={() => goToFeed(navigate)} />
      <ContainerEndereco>
        <Label>Endereço de entrega</Label>
        <Endereco>{profile.user && profile.user.address}</Endereco>        
      </ContainerEndereco>
      {

        cartWithOrders.length > 0 ? 
        <ContainerPedido>
        <ContainerEnderecoRestaurante>
            <LabelRestaurante>{infoRestaurante && infoRestaurante.name}</LabelRestaurante>   
            <LabelEnderecoRestaurante>{infoRestaurante && infoRestaurante.address}</LabelEnderecoRestaurante>    
            <LabelTempoEntrega>{infoRestaurante && infoRestaurante.deliveryTime} min.</LabelTempoEntrega> 
        </ContainerEnderecoRestaurante> 
        <ContainerItensPedido>
          {cardFood}          
        </ContainerItensPedido>    
      </ContainerPedido> :
      <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>
        
      }
      <ContainerFinalizar>
        <ContainerFrete>
          <Frete><b>Frete:</b> R${infoRestaurante && infoRestaurante.shipping.toFixed(2).replace('.',',')}</Frete>
        </ContainerFrete>
        <ContainerSubtotal>
          <SubtotalTitulo>SUBTOTAL</SubtotalTitulo>
          <SubtotalValor>R${subtotalComFrete.toFixed(2)}</SubtotalValor>
        </ContainerSubtotal>
        <ContainerFormaPagamento>
          <FormaPgto>Forma de Pagamento</FormaPgto>
          <SelectPgto id="formasPagamento" value={pagamento} onChange={handleOnChange}>
            <option value={'credito'}>Cartão de Crédito</option>
            <option value={'debito'}>Cartão de Débito</option>
            <option value={'boleto'}>Boleto</option>
            <option value={'pix'}>Pix</option>
          </SelectPgto>
          <StyledButton variant="contained" onClick={() => confirmarCompra()}>Confirmar</StyledButton>
        </ContainerFormaPagamento>
      </ContainerFinalizar>
    </PageContainer>
      <Footer page='cart' />
    </>
  );
}

export default CartPage;
