import React from "react";

export function Products(props){
    return(
        <section className="Itens">
            <img src={props.urlimg}/>
            <h1>{props.Nome}</h1>
            <p>{props.Valor}</p>
            <p>Descrição: {props.Descricao}</p>
            <button onclick="addToCar()">Adicionar ao Carrinho</button>
        </section>
         
    )
}

export default Products
