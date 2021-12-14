import React from 'react'

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
            <span>
                precio:
                <br />
                {item.price}$
            </span>
        </div>
    )
}

export default ItemDetail
