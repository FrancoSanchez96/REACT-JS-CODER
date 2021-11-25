import React from 'react'
import './Nav/styles.css'

const ItemListC = (props) => {
    console.log(props)
    return (
        <div className="titleContainer">
            <h1 className="title">{props.saludo}</h1>
        </div>
    )
}

export default ItemListC
