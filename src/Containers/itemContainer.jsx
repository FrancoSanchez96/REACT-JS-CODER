import React from 'react'
import { useState ,useEffect } from 'react'
import ItemCounts from '../Components/ItemCounts'
import './Container.css'
import ItemListC from '../Components/ItemListC'

//ITEMCOUNT
const initialStock={
    initial : 1,
    stock : 12
  }

//ITEMS
function getItems () {
    return new Promise ((resolve,reject)=>{
        const object =[
            {
                id: 1,
                name:'Teclado',
                description:'Teclado Red Dragon IIV',
                stock: 20
            },
            {
                id: 2,
                name:'Mouse',
                description:'Mouse Genius PRO',
                stock: 10
            },
            {
                id: 3,
                name:'Auriculares',
                description:'Sony Gamer 2',
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
        return(  () => {
            setListProduct([])
        })
    },[])

    return (
        <div className="ItemContainer">
            <ItemCounts initialStock={initialStock}/>
            <ItemListC products ={listProduct}/>
           
            
        </div>
    )
}

export default ItemContainer
