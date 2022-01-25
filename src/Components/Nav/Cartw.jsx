import React from 'react'  
import './styles.css';
import useCartContext from '../CartContext'
import { Link } from 'react-router-dom'

const CartW = () => {
    const {QtyCart,clearCart} = useCartContext();
    
    return (
        <ul className="cartContainer">
            <button>
            <Link to='/cart'>
            {<img className="cart" src="/carrito-de-compras.png" alt="carrito" />}
            </Link>
            </button>

            <p>{QtyCart()}</p>

            <button onClick={clearCart}>x</button>
        </ul>
    )
}

export default CartW
