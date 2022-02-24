import {ItemList} from "../ItemList/ItemList"
import {Productos} from "../../Data/Data"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import '../ItemListContainer/ItemListContainer.css'
export const ItemListContainer = ({greetings}) =>{

    const category = useParams();
    console.log(category.Tipo);
    
    const [myProducts,setMyProducts] = useState([]);


    const getProductos = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(Productos)
        },2000);
      
    })

    useEffect(()=>{
    getProductos.then((data)=>{
        if (category.Tipo == undefined) {
            setMyProducts(data)
        }else{
            let filter = data.filter(e=>e.Tipo == category.Tipo)
            setMyProducts(filter);
        }
       
    })
    .catch(error=>{console.log(error)}) 
    
    },[myProducts])



return (
    <>
    <div>
        <h1>
            {greetings}
        </h1>
        <div>
            <ItemList Productos={myProducts}/>    
        <br></br>
        </div>
        
    </div>
    </>
)

}