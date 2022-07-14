import styled from 'styled-components';
import { primaryColor } from '../../constants/colors';

export const ContainerQuantidade = styled.div`
  color: ${primaryColor};
  border: 1px solid ${primaryColor};
  border-radius: 0 5px 0 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: -32px;
`;