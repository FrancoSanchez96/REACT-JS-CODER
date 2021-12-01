import React, { useState } from 'react'
import './Components.css'
const ItemCounts = ({initialStock}) => {
    const [contador,setContador] = useState(initialStock.initial);
    const [cartCount,setCartCount]=useState(0)

    const addCart = () =>{
        
    
        setCartCount (cartCount +1)
    }


    const sumarCount = () => {
        if (contador < initialStock.stock){
            setContador(contador +1)};
        }
    const restarCount = () => {
        if (contador > initialStock.initial){
            setContador(contador -1);
        }
        
    }

    return (
        <div>
           <h2>PRODUCTO</h2>
            <button onClick={sumarCount}className="btn">+</button>
            <span>{contador}</span>
            <button onClick={restarCount}className="btn">-</button>
            <button onClick ={addCart}>Agregar al carrito</button>

           
        </div>
    )
}


export default ItemCounts
