import React from 'react'
import { Container, Main, P, Button} from './style'

const Carrinho = () => {
  return (
    <Container>

      <h3>Carrinho:</h3>

      <Main>

        <p>1x</p>
        <P>
          <p>Foguete</p>
        </P>
        <Button>Remover</Button>

      </Main>

      <Main>

        <p>Valor total R$ 0,00</p>

      </Main>
    </Container>
  )
}

export default Carrinho