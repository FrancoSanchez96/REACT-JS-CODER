import React from 'react'
import { useState ,useEffect } from 'react'
import './Container.css'
import ItemDetail from '../Components/ItemDetail'
function getItem () {
    return new Promise ((resolve,reject)=>{
        const object =[
            {
                id: 1,
                name:'Teclado Red Dragon IIV',
                price:8000,
                img:"https://i.ibb.co/mydGNqk/teclado-red-dragon.jpg",
                description:'Teclado Mecanico con luced LED inalambrico alta respuesta',
                stock: 20
            },
            {
                id: 2,
                name:'Mouse Genius PRO SCORPION',
                price:4000,
                img:"https://i.ibb.co/Gx0Z3Pp/auriculares-hyperx.jpg",
                description:'Mouse GAMER 5000 dpi con Software y Diseño ',
                stock: 10
            },
            {
                id: 3,
                name:'Auriculares HyperX PRO',
                price:10000,
                img:"https://i.ibb.co/TgTS1hP/mouse-genius-scorpion.jpg",
                description:'Auriculaes con sonido Ultra HD 4k Sensibit high LED',
                stock: 5
            }


        ]
        setTimeout(()=> resolve(object[1]),2000)
    })
}
const ItemDetailContainer = () => {
    const[itemDetail,setItems]=useState([])
    useEffect(() => {
        const item = getItem()

        item.then(item=>{

            setItems(item)
            
        })
        return (
            () => {
          setItems([])  
        }
        )
    }, [])


    return (
        <div>
            <ItemDetail item={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer
