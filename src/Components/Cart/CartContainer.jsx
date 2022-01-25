import React from 'react'
import useCartContext from "../CartContext"
import CartItem from './CartItem'
import './Cart.css'



const CartContainer = () => {

    const {itemsCart,clearCart} = useCartContext();


    if ( itemsCart.length === 0) {
    return (
        <div>
            <h1>
                Carrito
            </h1>
            <span>
                Tu carrito esta vacio
            </span>
        </div>
    )
    }

    else {

        return(
        <div>

            <h1>
                    Carrito
            </h1>
            <table className='Container'>
                <thead>
                    <tr className='menu'>
                        <th>Imagen</th>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th><button onClick={clearCart}>Vaciar</button></th>
                    </tr>

                </thead>
                <tbody>
                    {itemsCart.map((item)=>
                        <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        imgUrl={item.img}
                        price={item.price}
                        quantity={item.qty}
                        />
                        

                    )}
                </tbody>
            </table>
        </div>
        )
    }

}

export default CartContainer
