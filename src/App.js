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

  //estados do Carrinho
/*   const [adicionaProduto, setAdicionaProduto] = useState("")
  const [quantidade, setQuantidade] = useState(0) */

 //Adicionar produto no carrinho
 /*  const addProduto = (e) => {
    e.preventDefault()

    const prodAdd = {qnt: produtos.id, nome: produtos.titulo}
    const listaDeProdutos = [...produtos, prodAdd]

    setAdicionaProduto(listaDeProdutos)
  } */

  //Remover item


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
          produtos={produtos}
          valorMinimo={valorMinimo}
          valorMaximo={valorMaximo}
          buscarPorNome={buscar}

        
        />
        <Carrinho 
           preco={produtos.preco}
           nome={produtos.titulo}
           produtos={produtos}
         /*   adicionaProduto={adicionaProduto}
           quantidade={quantidade}
           addProduto={addProduto} */
        
          /*  onChangeAdicionaProduto={(e) => setAdicionaProduto(e.targe.value)}
           onChangeQuantidade={(e) => setQuantidade(e.target.value)} */
         
        />
      </AppContainer>
    </>
  );
};
export default App;
