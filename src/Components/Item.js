import React from 'react'

const Item = ({product}) => {
    console.log(product)
    return (
        <div>
            <ul>
               {product.name}
            </ul>
        </div>
    )
}

export default Item
