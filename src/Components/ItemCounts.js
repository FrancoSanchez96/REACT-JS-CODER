import React, { useState } from 'react'
import './Components.css'
const ItemCounts = (stock ,initial) => {
    const [contador,setContador] = useState(initial);


    const sumarCount = () => {
        if (contador < stock){
            setContador(contador +1)};
        }
    const restarCount = () => {
        if (contador > initial){
            setContador(contador -1);
        }
        
    }

    return (
        <div>
           <h2>PRODUCTO</h2>
            <button onClick={sumarCount}className="btn">+</button>
            <span>{contador}</span>
            <button onClick={restarCount}className="btn">-</button>
           
        </div>
    )
}


export default ItemCounts
