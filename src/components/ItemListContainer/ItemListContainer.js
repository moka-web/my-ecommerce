import {ItemList} from "../ItemList/ItemList"
import {Productos} from "../../Data/Data"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import '../ItemListContainer/ItemListContainer.css'
import { collection, getDocs } from "firebase/firestore"
import db from "../../Services/Firebase"
export const ItemListContainer = ({greetings}) =>{

    const category = useParams();
    const [myProducts,setMyProducts] = useState([]);



    const getData = async () =>{
        try {
            const productsCollection = collection(db,"Items")
            const col = await getDocs(productsCollection)
            const res = col.docs.map((doc)=> doc ={id:doc.id, ...doc.data()})
            setMyProducts(res)
        } catch (error) {
            console.warn('error',error)
        }
    }

    const getCategoryId = async () =>{
        try {
            const productsCollection = collection(db,"Items")
            const col = await getDocs(productsCollection)
            const res = col.docs.map((doc)=> doc ={id:doc.id, ...doc.data()})
            setMyProducts(res.filter(e=>e.Tipo == category.Tipo))
        } catch (error) {
            console.warn('error',error)
        }


    }

    useEffect(()=>{
        category.Tipo?getCategoryId():getData()
    },[category])

  

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



   /* const getProductos = new Promise ((resolve, reject)=>{
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
    
    },[myProducts])*/