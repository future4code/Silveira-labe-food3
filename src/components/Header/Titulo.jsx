import React from 'react';
import {Titulo} from './Styled';


const TituloHeader = (props) => {
  return (
    <Titulo>
      {props.texto}
    </Titulo>
  )
}

export default TituloHeader;