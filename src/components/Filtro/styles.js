import styled from "styled-components";

export const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 80vh;
  padding: 0px 10px;
`;
export const Titulo = styled.h3`
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
`;
export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;
export const Bloco = styled.div`
  display: block;
`;
export const Input = styled.input`
  width: 120px;
  height: 28px;
  margin-top: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  border: 2px solid #ccc;
  transition: all 0.3s;
  padding: 1px 6px;
`;