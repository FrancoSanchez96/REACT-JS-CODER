import React from 'react'
import ItemCounts from './ItemCounts'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//ITEMCOUNT
const initialStock={
    initial : 1
  }


const ItemDetail = ({item}) => {

    const [cartCount,setCartCount]=useState()


    const onAdd = (count) => {
    setCartCount(count) 
    alert (`agregaste ${count} items al carrito`);
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

            {cartCount ?

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
