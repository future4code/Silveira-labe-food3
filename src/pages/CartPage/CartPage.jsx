import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { goToFeed } from '../../routes/coordinator';
import RestaurantCard from '../RestaurantDetailsPage/RestaurantCard';
import { ContainerEndereco, ContainerPedido, ContainerFinalizar, Label, Endereco, ContainerFrete, ContainerSubtotal, Frete, SubtotalTitulo, SubtotalValor, ContainerFormaPagamento, FormaPgto, SelectPgto, StyledButton, ContainerEnderecoRestaurante, LabelRestaurante, LabelEnderecoRestaurante, LabelTempoEntrega, ContainerItensPedido, CarrinhoVazio } from './Styled';
import GlobalStateContext from '../../context/global/GlobalStateContext';

const CartPage = () => {
  const navigate = useNavigate();

  /* const { states, setters } = useContext(GlobalStateContext);

  const { cart } = states;
  const { setCart } = setters; */

  const [pagamento, setPagamento] = useState('debito');

  const handleOnChange = (event) => {
    setPagamento(event.target.value);
  }

  const confirmarCompra = (event) =>{
    console.log(pagamento);
  }

  const hasPedido = true; /* Ver onde colocar isso para funcionar o ternário */


  return (
    <>
      <Header hasBtn={false} hasTitle={true} texto="Meu Carrinho" onclick={() => goToFeed(navigate)} />
      <ContainerEndereco>
        <Label>Endereço de entrega</Label>
        <Endereco>Rua Alessandra Vieira, 42</Endereco>        
      </ContainerEndereco>
      {

        hasPedido ? 
        <ContainerPedido>
        <ContainerEnderecoRestaurante>
            <LabelRestaurante>Bulger Vila Madalena</LabelRestaurante>   
            <LabelEnderecoRestaurante>R. Fradique Coutinho, 1136 - Vila Madalena</LabelEnderecoRestaurante>    
            <LabelTempoEntrega>30 - 45min.</LabelTempoEntrega> 
        </ContainerEnderecoRestaurante> 
        <ContainerItensPedido>
          
          
        </ContainerItensPedido>    
      </ContainerPedido> :
      <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>

      }
      <ContainerFinalizar>
        <ContainerFrete>
          <Frete><b>Frete:</b> R$35,48</Frete>
        </ContainerFrete>
        <ContainerSubtotal>
          <SubtotalTitulo>SUBTOTAL</SubtotalTitulo>
          <SubtotalValor>R$57,98</SubtotalValor>
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
    </>
  );
}

export default CartPage;
