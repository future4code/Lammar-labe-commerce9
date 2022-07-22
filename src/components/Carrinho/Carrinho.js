import React from 'react'
import { Container, Main, P, Button } from './style'

const Carrinho = (props) => {
  const listCarrinho = props.carrinho.map((e) => {

    let soma2 = e.quantidade * e.preco

    return (
      <Main>
        <P>{e.quantidade}x  {e.titulo}
        <div>{soma2},00</div>
        </P>
        <Button onClick={() => props.removerProduto(e.id)}>Remover</Button>
      </Main>
    )
  })

  let soma = 0
  for (let i of props.carrinho) {
    soma += i.quantidade * i.preco
  }

  return (
    <Container>
      {props.guardaDados}
      <h3>Carrinho:</h3>
      {listCarrinho}
      <p>Valor total: R${soma},00</p>
    </Container>
  )
}

export default Carrinho