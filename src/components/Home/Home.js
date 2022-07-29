import React from "react";
import { ProdutosContainer, ProdutosHeader, GridProdutos, CardContainer, Titulo, Preço, AddToCartButton } from "./styles";

const Home = (props) => {
  const obterListaFiltrada = () => {
    return props.produtos
      //filtro valor minimo
      .filter((produtos) => props.valorMinimo <= produtos.preco || props.valorMinimo === "")
      //filtro valor maximo
      .filter((produtos) => props.valorMaximo >= produtos.preco || props.valorMaximo === "")
      //filtro busca
      .filter((produtos) => produtos.titulo.toLowerCase().includes(props.buscarPorNome.toLowerCase()))
      //Order
      .sort((a, b) => props.sort === "Crescente" ? a.preco - b.preco : b.preco - a.preco)
  };

  const listaFiltrada = obterListaFiltrada().map((produtos) => {
    return (
      <CardContainer>
        <img src={produtos.imagem} alt="imagemDoProduto" />
        <Titulo>{produtos.titulo}</Titulo>
        <Preço>R${produtos.preco},00</Preço>
        <AddToCartButton onClick={() => props.addProdutoCarrinho(produtos.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardContainer>
    )
  });

  return (
    <ProdutosContainer>
      <ProdutosHeader>
        <p>Quantidade de produtos: {listaFiltrada.length}</p>
        <label>
          <spam>Ordenação: </spam> 
          <select value={props.sort} onChange={props.setSort}>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </ProdutosHeader>
      <GridProdutos>
        {listaFiltrada}
      </GridProdutos>
    </ProdutosContainer>
  );
};

export default Home;