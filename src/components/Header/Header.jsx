import React from 'react';
import {BlankSpace, Btn, Container} from './Styled';
import TituloHeader from './Titulo';

const Header = (props) => {
  return (
    <Container>
      {props.hasBtn ? <Btn onClick={props.onclick}><i className="fas fa-chevron-left"></i></Btn> : <div></div>}
      {props.hasTitle ? <TituloHeader texto={props.texto} /> : <div></div>}
      {props.hasBtn ? <BlankSpace /> : <div></div>}      
    </Container>
  )
}

export default Header;