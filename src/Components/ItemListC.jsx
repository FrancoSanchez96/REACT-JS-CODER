import React from 'react'
import Item from './Item'


const ItemListC = ({products}) => {
    
    return (
        <div>
            
                {products.map(i =>{
                    
                <Item key ={i.id}product={i}/>
                })}
            
        </div>
    )
}

export default ItemListC
