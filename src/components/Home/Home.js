import React from "react";
import Css from "./Style.css"
import ContProd from "./ContProd"
import Order from "./Order"
import Products from "./Products"
import styled from 'styled-components'

const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 80vh;
    padding: 0px 10px;
`;
const shopping_list = styled.div`
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

export function Home(props){
    return(
        <div className="shopping_list">
        <ContProd/>
       <Order/>
       <Products
        urlimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvPxPk9n93CB03IjcaiSo590lsQwcip3Fwg&usqp=CAU"
        Nome="Foguete Russo Roscove"
        Valor="R$ 10.000,00"
        Descricao="NFT do Melhor do Mundo"
       />
           <Products
        urlimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzH3Ovb-ovQhfTvlXoboEp4RnuPhqTPDUKBUghyh3UH1YirIQVQKyqieMZxbGZDadtTU&usqp=CAU"
        Nome="Foguete Russo Roscove"
        Valor="R$ 150.000,00"
        Descricao="Card"
       />
           <Products
        urlimg="https://i.pinimg.com/474x/8a/1f/93/8a1f93852f3779f391ffbcd3924dc536.jpg"
        Nome="Foguete Russo Roscove"
        Valor="R$ 19.000,00"
        Descricao="Viagens de tirar vc do chão"
       />
  
      </div>
    )
}

  const obterListaFiltrada = () => {
    return props.produtos
      //filtro valor minimo
      .filter((produtos) => props.valorMinimo <= produtos.preco)
      //filtro valor maximo
      .filter((produtos) => props.valorMaximo >= produtos.preco)
      //filtro busca
      .filter((produtos) => produtos.titulo.toLowerCase().includes(props.buscarPorNome.toLowerCase()))
  };

  const listaFiltrada = obterListaFiltrada().map((produtos) => {
    return (
      <CardContainer>
        <img src={produtos.imagem} alt="imagemDoProduto" />
        <Titulo>{produtos.titulo}</Titulo>
        <Preço>R${produtos.preco},00</Preço>
        <AddToCartButton>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardContainer>
    )});

  return (
    <ProdutosContainer>
      <ProdutosHeader>
        <p>Quantidade de produtos: {listaFiltrada.length}</p>
        <label>
          Ordenação:
          <select name="order">
            <option value="Oc">Ordem Crescente</option>
            <option value="Od">Ordem Decrescente</option>
          </select>
        </label>
      </ProdutosHeader>
      <GridProdutos>
        {listaFiltrada}
      </GridProdutos>
    </ProdutosContainer>
  );
};

export default Produtos;
