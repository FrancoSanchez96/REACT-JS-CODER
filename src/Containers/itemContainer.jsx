import React from 'react'
import { useState ,useEffect } from 'react'
import './Container.css'
import ItemListC from '../Components/ItemListC'
import {useParams}from 'react-router-dom'
import { collection, getDocs, query ,where } from 'firebase/firestore'
import {db} from '../Service/Firebase/firebase'

//COMPONENT


const ItemContainer = () => {


    const [listProduct,setListProduct]=useState([])
    const [loading,setLoading] =useState(true)
    const {categoryId} = useParams()



    useEffect(()=>{
        if (!categoryId){
        getDocs(collection(db,'items')).then((querySnapshot)=>{
            const listProduct =querySnapshot.docs.map(doc =>{
                return{id:doc.id, ...doc.data()}
            })
            setListProduct(listProduct)
        }).catch((error)=>{
            console.log('Error de carga',error)
        }).finally(()=>{
            setLoading(false)
        })
        }else{
            setLoading(true)
            getDocs(query(collection(db,'items'),where('category', '==', categoryId))).then((querySnapshot)=>{
                const listProduct =querySnapshot.docs.map(doc =>{
                    return{id:doc.id, ...doc.data()}
                })
                setListProduct(listProduct)
            }).catch((error)=>{
                console.log('Error de carga',error)
            }).finally(()=>{
                setLoading(false)
            })
        }

        return(
            () => {
                setListProduct([])
            }
            )
        },[categoryId])

    if (loading) {
        return <h1>Loading..</h1>
    }

    return (
        <div className="ItemContainer">
            
            <ItemListC products ={listProduct}/>
           
            
        </div>
    )
}

export default ItemContainer
