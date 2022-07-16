import React, {useState} from 'react'
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 80vh;
    padding: 0px 10px;
`;
const Titulo = styled.h3`
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
`;
const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;
const Bloco = styled.div`
  display: block;
`;
const Input = styled.input`
  width: 120px;
  height: 28px;
  margin-top: 4px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  border: 2px solid #ccc;
  transition: all 0.3s;
  padding: 1px 6px;
`;

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
              onChange={props.onChangeValorMaximo}/>
            </InputContainer>
            <Bloco>
                Pesquisar:
            </Bloco>
            <Input type="text" placeholder="Pesquisar"
            value={props.buscarPorNome}
            onChange={props.onChangeBuscarPorNome} />
        </ContainerFiltro>
    </>
  )
}

export default Filtro