import React from 'react'  
import './styles.css';
import useCartContext from '../CartContext'

const CartW = () => {
    const {QtyCart,clearCart} = useCartContext();
    
    return (
        <ul className="cartContainer">
            {<img className="cart" src="/carrito-de-compras.png" alt="carrito" />}

            <p>{QtyCart()}</p>

            <button onClick={clearCart}>Vaciar carrito</button>
        </ul>
    )
}

export default CartW
