import {Productos} from "../../Data/Data"
import { useState,useEffect } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail."
import { useParams } from "react-router-dom"

export const ItemDetailContainer = ()=>{
        const {id} = useParams();
        
        const [myDetail,setMyDetail] = useState([])

        const getDetail = new Promise ((resolve,reject) =>{
            setTimeout(() => {
                resolve(Productos)
            }, 2000);  
        })

        useEffect(()=>{
        getDetail.then((details)=>{
            setMyDetail(details);
        })

        },[])

    return(
        <div>
            <ItemDetail {...myDetail[id]} />
        </div>
    )



}