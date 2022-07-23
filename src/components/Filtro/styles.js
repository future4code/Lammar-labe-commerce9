import styled from "styled-components";

export const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 30vh;
  padding: 0px 10px;
`

export const Titulo = styled.h3`
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
`

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  display: -webkit-inline-box;
  -webkit-box-align: center;
`
export const Bloco = styled.div`
  display: block;
  margin-top: 10px;
`
export const Input = styled.input`
  width: 120px;
  height: 28px;
  margin-top: 4px;
  cursor: grab;
  font-weight: 400;
  font-size: 12px;
  transition: all 0.3s;
`
export const ValoresInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: initial;
  p{
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: rgb(86, 92, 105);
    margin: 5px;
    min-width: max-content;
  }
`