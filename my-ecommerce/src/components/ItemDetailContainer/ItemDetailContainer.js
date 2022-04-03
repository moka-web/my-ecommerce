
import { useState,useEffect} from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail."
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../Services/Firebase"
import '../ItemDetailContainer/ItemDetailContainer.css'

export const ItemDetailContainer = ()=>{

        const {id} = useParams();

        const [myDetail,setMyDetail] = useState()

     const getSelectedProduct = async ()=>{
        try {
            const product = doc(db,"Items",id)
            const response = await getDoc(product)
            const result ={id: response.id, ...response.data()};
            setMyDetail(result)
        } catch (error) {
            console.warn('error',error)
        }
     };

     useEffect(()=>{
        getSelectedProduct()
     })


     
    return(
        <div>

            {myDetail===undefined?<div className="loaderDetail"><h1>Loading...</h1></div>:<ItemDetail {...myDetail} />}
            
        </div>
    )



}



  /*useEffect(()=>{

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
        },[id]) */