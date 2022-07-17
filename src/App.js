import React, { useState } from "react";
import Filtro from "./components/Filtro/Filtro";
import Carrinho from "./components/Carrinho/Carrinho";
import Home from "./components/Home/Home";
import produtos from "./components/MockDeDados";
import { AppContainer } from "./styles";

const App = () => {
  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(500);
  const [buscar, setBuscar] = useState("");

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
        <Carrinho />
      </AppContainer>
    </>
  );
};
export default App;
