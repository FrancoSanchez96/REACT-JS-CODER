import React from 'react'  
import './styles.css';


const CartW = () => {
    return (
        <ul className="cartContainer">
            {<img className="cart" src="/carrito-de-compras.png" alt="carrito" />}
            <li>1</li>
        </ul>
    )
}

export default CartW
