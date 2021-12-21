import React from 'react'
import { useState ,useEffect } from 'react'
import './Container.css'
import { getItemDetail } from '../productos'
import ItemDetail from '../Components/ItemDetail'
import {useParams}from 'react-router-dom'


const ItemDetailContainer = () => {

    const[itemDetail,setItems]=useState([])
    const {paramId}=useParams()
    
    useEffect(() => {
        const item = getItemDetail(paramId)

        
        item.then(item=>{

            setItems(item)
            
        })
        return (
            () => {
          setItems([])  
        }
        )
    }, [paramId])


    return (
        <div>
            {
            <ItemDetail item={itemDetail}/>
            }   
        </div>
    )
}

export default ItemDetailContainer
