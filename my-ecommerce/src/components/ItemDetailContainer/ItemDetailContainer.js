import {Productos} from "../../Data/Data"
import { useState,useEffect} from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail."
import { useParams } from "react-router-dom"


export const ItemDetailContainer = ()=>{

    
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

    return(
        <div>
            <ItemDetail {...myDetail} />
        </div>
    )



}