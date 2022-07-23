import React, { useState, useEffect } from "react";
import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho/Carrinho";
import Home from "./components/Home/Home";
import produtos from "./components/MockDeDados";
import { AppContainer } from "./styles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(250);
  const [buscar, setBuscar] = useState("");
  const [sort, setSort] = useState("Decrescente")
  const [carrinho, setCarrinho] = useState(() => {
    if (localStorage.getItem("carrinho")) {
      return JSON.parse(localStorage.getItem("carrinho"));
    }
    return [];
  })

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]
  )

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
      <Header />
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
          sort={sort}
          setSort={(e) => setSort(e.target.value)}
        />
        <Carrinho
          carrinho={carrinho}
          removerProduto={removerProduto}
        />
      </AppContainer>
      <Footer />
    </>
  );
};
export default App;
