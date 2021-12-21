import React from 'react'
import "./Components.css"

import { Link } from 'react-router-dom'


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
            <span>
                Price : ${product.price}
            </span>
            <Link to={`/product/${product.id}`}>Ver Detalles </Link>
 

        </div>
    )
}

export default Item
