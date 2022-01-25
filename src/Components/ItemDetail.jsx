import React from 'react'
import ItemCounts from './ItemCounts'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useCartContext from './CartContext'

//ITEMCOUNT
const initialStock={
    initial : 1
  }


const ItemDetail = ({item}) => {

    const [cartCount,setCartCount]=useState(0)
    const {addItem,isInCart}= useCartContext();


    function onAdd(qty){
    setCartCount(qty);
    addItem(item,qty);
    }
    
    return (
        <div className="Item">

            <h2>{item.name}</h2>

            <img src={item.img} alt={item.name} />

            <p>
               Detalles: 
               <br />
               {item.description}
            </p>

            <span>
               stock: 
               <br />
               {item.stock}
            </span>

            {isInCart(item.id) ?
            
            
            <button>
            <Link to='/cart'>Terminar Compra</Link>
            </button>        
            :
            <ItemCounts
            initialStock={initialStock }
            stock={item.stock}
            onAdd={onAdd}/>

            }
            <span>
                precio :
                <br />
                {item.price}$
            </span>




        </div>


    )
}

export default ItemDetail
