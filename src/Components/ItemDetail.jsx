import React from 'react'
import ItemCounts from './ItemCounts'

//ITEMCOUNT
const initialStock={
    initial : 1
  }


const ItemDetail = ({item}) => {
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
            <ItemCounts initialStock={initialStock }stock={item.stock}/>
            <span>
                precio:
                <br />
                {item.price}$
            </span>
        </div>
    )
}

export default ItemDetail
