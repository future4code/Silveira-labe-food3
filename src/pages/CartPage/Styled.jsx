import styled from 'styled-components';
import {blackColor, neutralColor, primaryColor} from '../../constants/colors';

export const ContainerEndereco = styled.div`
  background-color: ${neutralColor};
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;
  line-height: 10px;
`;

export const Label = styled.p`
  color: #929292;
  font-weight: 300;
  font-size: 18px;
  margin: 0 20px 10px 20px;
`;

export const Endereco = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0 20px;
  line-height: 25px;
`;

export const PageContainer = styled.div`
  margin-bottom: 180px;
`;

export const ContainerPedido = styled.div`
  min-height: calc(41vh - 30px);/* descontar o valor dos paddings, pois não está zerado no estado global */
  max-height: calc(41vh - 30px);
  padding: 15px;
  overflow-y: auto;
`;

export const ContainerFinalizar = styled.div`
  height: 29.7vh;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  background-color: white;
`;

export const ContainerFrete = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContainerSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Frete = styled.p`
  color: black;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const SubtotalTitulo = styled.p`
  color: ${primaryColor};
  font-weight: bold;
  font-size: 16px;
  margin: 8px 0;
`;

export const SubtotalValor = styled.p`
  color: ${primaryColor};
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

export const ContainerFormaPagamento = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormaPgto = styled.p`
  width: 100%;
  border-bottom: 1px solid ${blackColor};
  padding-bottom: 4px;
  margin-top: 3px;
`;

export const SelectPgto = styled.select`
  width: 100%;
  border-radius: 5px;
  height: 30px;
`;

export const StyledButton = styled.button`
  background-color: ${primaryColor};
  margin-top: 10px;
  width: 100%;
  height: 35px;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  :active{
    filter: brightness(1.3);
  }
`;

export const ContainerEnderecoRestaurante = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 10px;
`;

export const LabelRestaurante = styled.p`
  color: ${primaryColor};
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
`;

export const LabelEnderecoRestaurante = styled.p`
  color: #929292;
  font-weight: 300;
  font-size: 18px;
  margin: 0 0 12px 0;

`;
export const LabelTempoEntrega = styled.p`
  color: #929292;
  font-weight: 300;
  font-size: 18px;
  margin: 0;
`;

export const ContainerItensPedido = styled.div`
  margin-top: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CarrinhoVazio = styled.p`
width: 100%;
margin-top: 25px;
text-align: center;
`;

