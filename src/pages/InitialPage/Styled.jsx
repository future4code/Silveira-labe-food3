import styled from 'styled-components';
import { primaryColor } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${primaryColor};
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const LogoImage = styled.img`
  width: 100px;
`;
