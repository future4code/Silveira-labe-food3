import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-future-white.png';
import { goToLogin } from '../../routes/coordinator';
import { Card, Container, ContainerLogo, LogoImage } from './Styled'; 

const InitialPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => goToLogin(navigate), 3000);
  },[]);


  return (
    <Container>
        <ContainerLogo>
          <LogoImage src={logo} alt="logo" />
        </ContainerLogo>
    </Container>
  )
}

export default InitialPage