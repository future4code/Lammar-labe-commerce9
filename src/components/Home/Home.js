import React from "react";
import Css from "./Style.css"
import ContProd from "./ContProd"
import Order from "./Order"
import Products from "./Products"

export function Home(props){
    return(
        <div className="shopping-list">
        <ContProd/>
       <Order/>
       <Products
        urlimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvPxPk9n93CB03IjcaiSo590lsQwcip3Fwg&usqp=CAU"
        Nome="Foguete Russo Roscove"
        Valor="R$ 10.000,00"
        Descricao="NFT do Melhor do Mundo"
       />
           <Products
        urlimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzH3Ovb-ovQhfTvlXoboEp4RnuPhqTPDUKBUghyh3UH1YirIQVQKyqieMZxbGZDadtTU&usqp=CAU"
        Nome="Foguete Russo Roscove"
        Valor="R$ 150.000,00"
        Descricao="Card"
       />
           <Products
        urlimg="https://i.pinimg.com/474x/8a/1f/93/8a1f93852f3779f391ffbcd3924dc536.jpg"
        Nome="Foguete Russo Roscove"
        Valor="R$ 19.000,00"
        Descricao="Viagens de tirar vc do chão"
       />
  
      </div>
    )
}

export default Home
