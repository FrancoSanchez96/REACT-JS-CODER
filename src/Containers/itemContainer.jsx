import React from 'react'
import ItemCounts from '../Components/ItemCounts'
import './Container.css'
const ItemContainer = () => {

    
    
    return (
        <div className="ItemContainer">
            <ItemCounts stock='10' inictial='1'/>
        </div>
    )
}

export default ItemContainer
