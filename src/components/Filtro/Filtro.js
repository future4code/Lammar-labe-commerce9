import React from "react";
import { ContainerFiltro, Titulo, InputContainer, Input, Bloco} from "./styles";

const Filtro = (props) => {
  return (
    <>
      <ContainerFiltro>
        <Titulo>Filtros</Titulo>
        <InputContainer>
          Valor mínimo:
          <Input
            type="number"
            placeholder="R$"
            value={props.valorMinimo}
            onChange={props.onChangeValorMinimo}
          />
        </InputContainer>
        <InputContainer>
          Valor maximo:
          <Input
            type="number"
            placeholder="R$"
            value={props.valorMaximo}
            onChange={props.onChangeValorMaximo}
          />
        </InputContainer>
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
