import React, { useState } from 'react'

const ItemCounts = () => {
    const [contador,setContador] = useState(0);


    const sumarCount = () => {
        if (contador < 10){
            setContador(contador ++);

        }
    const restarCount = () => {
        if (contador < 10){
            setContador(contador ++);

        }
    }

    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={sumarCount}>+</button>
            <button onClick={restarCount}>-</button>
        </div>
    )
}


export default ItemCounts
