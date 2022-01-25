import React from 'react'
import { useState ,useEffect } from 'react'
import './Container.css'
import { getItemDetail } from '../productos'
import ItemDetail from '../Components/ItemDetail'
import {useParams}from 'react-router-dom'
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../Service/Firebase/firebase'


const ItemDetailContainer = () => {

    const [itemDetail,setItems]=useState([])
    const [loading,setLoading]=useState(true)
    const {paramId}=useParams()
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db,'items',paramId)).then((querySnapshot) =>{
            const itemDetail ={id:querySnapshot.id, ...querySnapshot.data()}
            setItems(itemDetail)
        }).catch((error)=>{
            console.log('error al cargar')
        }).finally(()=>{
            setLoading(false)
        })
        return (
            () => {
          setItems([])  
        }
        )
    }, [paramId])

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {
            <ItemDetail item={itemDetail}/>
            }   
        </div>
    )
}

export default ItemDetailContainer
