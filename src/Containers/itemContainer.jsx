import React from 'react'
import { useState ,useEffect } from 'react'

import './Container.css'
import ItemListC from '../Components/ItemListC'



//ITEMS
function getItems () {
    return new Promise ((resolve,reject)=>{
        const object =[
            {
                id: 1,
                name:'Teclado Red Dragon IIV',
                img:"https://i.ibb.co/mydGNqk/teclado-red-dragon.jpg",
                description:'Teclado Mecanico con luced LED',
                stock: 20
            },
            {
                id: 2,
                name:'Mouse Genius PRO SCORPION',
                img:"https://i.ibb.co/Gx0Z3Pp/auriculares-hyperx.jpg",
                description:'Mouse GAMER 5000 dpi con Software y Diseño ',
                stock: 10
            },
            {
                id: 3,
                name:'Auriculares HyperX PRO',
                img:"https://i.ibb.co/TgTS1hP/mouse-genius-scorpion.jpg",
                description:'Auriculaes con sonido Ultra HD 4k Sensibit high LED',
                stock: 5
            }


        ]
        setTimeout(()=> resolve(object),3000)
    })
}


//COMPONENT


const ItemContainer = () => {
    const [listProduct,setListProduct]=useState([])
    useEffect(()=>{
        const list = getItems()

        list.then(list =>{
            
            setListProduct(list)
        })
        return(
            () => {
                setListProduct([])
            }
            )
        },[])

    return (
        <div className="ItemContainer">
            
            <ItemListC products ={listProduct}/>
           
            
        </div>
    )
}

export default ItemContainer
