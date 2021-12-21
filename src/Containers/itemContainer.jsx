import React from 'react'
import { useState ,useEffect } from 'react'
import { getCategory } from '../productos'
import './Container.css'
import ItemListC from '../Components/ItemListC'
import {useParams}from 'react-router-dom'


//COMPONENT


const ItemContainer = () => {

    const [listProduct,setListProduct]=useState([])
    const {categoryId} = useParams()



    useEffect(()=>{
        getCategory(categoryId).then(list =>{
            
            setListProduct(list)
        }).catch(err =>{
            console.log(err)
        })
        return(
            () => {
                setListProduct([])
            }
            )
        },[categoryId])

    return (
        <div className="ItemContainer">
            
            <ItemListC products ={listProduct}/>
           
            
        </div>
    )
}

export default ItemContainer
