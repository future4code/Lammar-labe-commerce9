import styled from "styled-components";

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`
export const ProdutosHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`
export const GridProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vh;
  font-weight: bold;
  height: 40vh;
  justify-content: space-between;
  margin: 8px;
  img {
    width: 100%;
    height: 60%;
    border-radius: 16px 16px 0 0;
  }
`
export const AddToCartButton = styled.button`
  align-self: center;
  width: 200px;
  height: 40px;
  margin-top: 4px;
  background-color: rgb(255, 101, 0);
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  border: 0;
  padding: 1px 6px;
  color: white;
`
export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  padding: 1%;
`
export const Preço = styled.div`
  /* color: #ee4d2d; */
  color: rgb(255, 101, 0);
  font-weight: bold;
  padding: 1%;
`
