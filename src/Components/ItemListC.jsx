import React from 'react'
import Item from './Item'
import "./Components.css"


const ItemListC = ({products}) => {
    
    return (

                <ul className="ItemList">
                {products.map(product =><Item key ={product.id}product={product}/>)}
                </ul>
    )
}

export default ItemListC
