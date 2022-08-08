import React from 'react'
import { Container, Main, P, Button, Finalizar } from './style'

const Carrinho = (props) => {
  const listCarrinho = props.carrinho.map((e) => {

    return (
      <Main>
        <P>{e.quantidade}x  {e.titulo}
        <div>R$ {e.quantidade * e.preco},00</div>
        </P>
        <Button onClick={() => props.removerProduto(e.id)}>Remover</Button>
      </Main>
    )
  })

  let soma = 0
  for (let i of props.carrinho) {
    soma += i.quantidade * i.preco
  }

  const alertMsg = () => {
    return (
      alert(`Obrigado por comprar na nossa loja!\n\nTotal: R$ ${soma},00 😉`)
    )
  }

  const finalizar = () => {
    if (listCarrinho.length > 0) {
    return (
      <Finalizar onClick={alertMsg}>Finalizar Compra</Finalizar>
    )}
  }

    // 
  return (
    <Container>
      <h3>Carrinho:</h3>
      {listCarrinho}
      <p>Valor total: R$ {soma},00</p>
      {finalizar()}
    </Container>

  )
}

export default Carrinho