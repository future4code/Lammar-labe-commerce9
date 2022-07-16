
import Filtro from './components/Filtro/Filtro';
import Carrinho from './components/Carrinho/Carrinho';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 16px;
  gap: 8px;
`

const App = () => {

  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(100);
  const [buscar, setBuscar] = useState("");

  return (
    <>
      <AppContainer>
        <Filtro
        valorMaximo={valorMaximo}
        valorMinimo={valorMinimo}
        OnChangeValorMinimo={(e) => setValorMinimo(e.target.value)}
        OnChangeValorMaximo={(e) => setValorMaximo(e.target.value)}
        OnChangeBuscar={(e) => setBuscar(e.target.value)}/>
        <Home
        valorMaximo={valorMaximo}
        valorMinimo={valorMinimo}
        buscar={buscar}/>
        <Carrinho/>
      </AppContainer>
    </>
  );
}
export default App;
