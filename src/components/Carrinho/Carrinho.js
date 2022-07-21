import React from 'react'
import { Container, P, Button } from './style'

const Carrinho = (props) => {
  const listCarrinho = props.carrinho.map((e) => {
    return (
      <>
        <P>{e.quantidade}{e.titulo}</P>
        <Button onClick={() => props.removerProduto(e.id)}>Remover</Button>
      </>
    )
  })


  return (
    <Container>
      <h3>Carrinho:</h3>
      {listCarrinho}
      <p>Valor total R$ 0,00</p>
    </Container>
  )
}

export default Carrinho