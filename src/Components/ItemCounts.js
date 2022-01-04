import React, { useState } from 'react'
import './Components.css'


const ItemCounts = ({initialStock,stock,onAdd}) => {
    const [contador,setContador] = useState(initialStock.initial);
  

    const sumarCount = () => {
        if (contador < stock){
            setContador(contador +1)};
        }


    const restarCount = () => {
        if (contador > initialStock.initial){
            setContador(contador -1);
        }
        
    }
    function addToCart(){
        onAdd(contador);
    }

    return (
        <div>
            <div>
            
                <button onClick={sumarCount}className="btn">+</button>
                <span>{contador}</span>
                <button onClick={restarCount}className="btn">-</button>
            </div>
            <button onClick ={addToCart} >Agregar al carrito</button>
        </div>
    )
}


export default ItemCounts
