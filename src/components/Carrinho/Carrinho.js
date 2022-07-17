import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
`

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  gap: 10px;
`

const P = styled.p`
  display: flex;
`

const Button = styled.button`
  cursor: pointer;
`

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