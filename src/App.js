import React, { useState } from "react";
import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho/Carrinho";
import Home from "./components/Home/Home";
import produtos from "./components/MockDeDados";
import { AppContainer } from "./styles";

const App = () => {
  const [valorMinimo, setValorMinimo] = useState(-Infinity);
  const [valorMaximo, setValorMaximo] = useState(Infinity);
  const [buscar, setBuscar] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  const addProdutoCarrinho = (id) => {
    const index = carrinho.findIndex((produto) => {
      return produto.id === id;
    });
    // Se o produto não existir no carrinho, adiciona o produto
    if (index < 0) {
      const novoProduto = {
        ...produtos.find((produto) => produto.id === id),
        quantidade: 1,
      };
      const novoCarrinho = [...carrinho, novoProduto];
      setCarrinho(novoCarrinho);
      // Se o produto já existir no carrinho, soma 1 na quantidade
    } else {
      const novoCarrinho = carrinho.map(produto => {
        if (produto.id === id) {
          return { ...produto, quantidade: produto.quantidade + 1 };
        }
        return produto;
      });
      setCarrinho(novoCarrinho);
    }
  };
  const removerProduto = (id) => {
    const novoCarrinho = carrinho
      .map((produtos) => {
        if (produtos.id === id) {
          return { ...produtos, quantidade: produtos.quantidade - 1 };
        }
        return produtos;
      })
      .filter((produtos) => produtos.quantidade > 0);
    setCarrinho(novoCarrinho);
  };



  return (
    <>
      <AppContainer>
        <Filtro
          valorMaximo={valorMaximo}
          valorMinimo={valorMinimo}
          buscar={buscar}
          onChangeValorMinimo={(e) => setValorMinimo(e.target.value)}
          onChangeValorMaximo={(e) => setValorMaximo(e.target.value)}
          onChangeBuscar={(e) => setBuscar(e.target.value)}
        />
        <Home
          produtos={produtos} valorMinimo={valorMinimo}
          valorMaximo={valorMaximo}
          buscarPorNome={buscar}
          addProdutoCarrinho={addProdutoCarrinho}


        />
        <Carrinho carrinho={carrinho} removerProduto={removerProduto} />
      </AppContainer>
    </>
  );
};
export default App;
