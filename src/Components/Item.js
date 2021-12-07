import React from 'react'
import "./Components.css"
import ItemCounts from './ItemCounts'

//ITEMCOUNT
const initialStock={
    initial : 1,
    stock : 12
  }

const Item = ({product}) => {
    console.log(product)
    return (
        <div className="Item">
            <h2>
               {product.name}

            </h2>
            <ul>
                <img src={product.img} alt={product.name}/>
            </ul>
            <p>
                {product.description}
            </p>
            <span>
                {product.stock}
            </span>
            <ItemCounts initialStock={initialStock}/>
        </div>
    )
}

export default Item
