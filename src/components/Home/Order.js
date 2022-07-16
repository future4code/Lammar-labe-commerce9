import React from "react";


export function Order(){
    return(
      <label>
          Ordenar:
          <select name="order">
              <option value="Oc">Ordem Crescente</option>
              <option value="Od">Ordem Decrescente</option>
          </select>
      </label>
    )
}

export default Order
