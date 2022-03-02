import {Productos} from "../../Data/Data"
import { useState,useEffect, useContext } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail."
import { useParams } from "react-router-dom"
import { CartContext } from "../../Context/cartContext"

export const ItemDetailContainer = ()=>{
       const {AddProductToCart,cartProducts} = useContext(CartContext)
    
        const {id} = useParams();


        const [myDetail,setMyDetail] = useState()

        useEffect(()=>{

        const getDetail = new Promise ((resolve,reject) =>{
            setTimeout(() => {
            
                resolve(Productos)
            }, 2000);  
        })

        getDetail.then((details)=>{
        
            let getId = details.find( (e)=>{
                return e.id === Number(id)
            })

            setMyDetail(getId);
        })
        },[id])

        useEffect(()=>{
            AddProductToCart(myDetail)
            console.log(cartProducts)
        })

        
        

    return(
        <div>
            <ItemDetail {...myDetail} />
        </div>
    )



}