import styled from "styled-components";

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;
export const ProdutosHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`;
export const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  justify-content: space-between;
  text-align: center;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  width: 33vh;
  height: 50vh;
  border-radius: 16px;
  margin: 5px;
  font-weight: bold;
  img {
    width: 100%;
    height: 60%;
    border-radius: 16px 16px 0 0;
  }
`;
export const AddToCartButton = styled.button`
  align-self: center;
  width: 200px;
  height: 40px;
  margin-top: 4px;
  background-color: #ee4d2d;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  border: 0;
  transition: all 0.3s;
  padding: 1px 6px;
  margin: 4%;
  color: #fff;
`;
export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  padding: 1%;
`;
export const Preço = styled.div`
  color: #ee4d2d;
  font-weight: bold;
  padding: 1%;
`;