import React from "react";
import { CardContainer, Titulo, Preço, AddToCartButton, ProdutosHeader, GridProdutos, ProdutosContainer } from "./styles";

const Produtos = (props) => {

  const obterListaFiltrada = () => {
    return props.produtos
      //filtro valor minimo
      .filter((produtos) => props.valorMinimo <= produtos.preco)
      //filtro valor maximo
      .filter((produtos) => props.valorMaximo >= produtos.preco)
      //filtro busca
      .filter((produtos) => produtos.titulo.toLowerCase().includes(props.buscarPorNome.toLowerCase()))
  };

  //Carrinho


//Renderização após o filtro
  const listaFiltrada = obterListaFiltrada().map((produtos) => {
    return (
      <CardContainer>
        <img src={produtos.imagem} alt="imagemDoProduto" />
        <Titulo>{produtos.titulo}</Titulo>
        <Preço>R${produtos.preco},00</Preço>
        <AddToCartButton onClick={props.addProduto}>
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
