import React from "react";
import {
  ContainerFiltro,
  Titulo,
  InputContainer,
  Input,
  Bloco,
  ValoresInput,
} from "./styles";

const Filtro = (props) => {
  return (
    <>
      <ContainerFiltro>
        <Titulo>Filtros</Titulo>
        Intervalo de Preço
        <InputContainer>
          <Input
            type="range"
            min="20"
            max="250"
            step="10"
            value={props.valorMinimo}
            onChange={props.onChangeValorMinimo}
          />
        </InputContainer>
        <ValoresInput>
          <p>R$ {props.valorMinimo},00</p> -
          <p>R$ {props.valorMaximo},00</p>
        </ValoresInput>
        <Bloco>Pesquisar:</Bloco>
        <Input
          type="text"
          placeholder="Pesquisar"
          value={props.buscarPorNome}
          onChange={props.onChangeBuscar}
        />
      </ContainerFiltro>
    </>
  );
};

export default Filtro;
