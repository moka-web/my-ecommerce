import {ItemList} from "../ItemList/ItemList"
import {Productos} from "../../Data/Data"
import { useState,useEffect } from "react"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"

export const ItemListContainer = ({greetings}) =>{

    const [myProducts,setMyProducts] = useState([]);

    const getProductos = new Promise ((resolve, reject)=>{
       /* setTimeout(() => {
            resolve(Productos)
        },2000);*/
        resolve(Productos)
    })

  useEffect(()=>{
    getProductos.then((data)=>{
        setMyProducts(data);
    }).catch(error=>{console.log(error)}) 
    },[])

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