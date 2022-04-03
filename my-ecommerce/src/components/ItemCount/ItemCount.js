import React, {useContext, useState} from "react";
import Button from 'react-bootstrap/Button'
import { CartContext } from "../../Context/cartContext";
import '../ItemCount/ItemCount.css'

export const ItemCount = ({stock,initial,onAdd}) =>{
    
    const [count,setCount]  = useState(initial);
    const {productsCount} = useContext(CartContext);
    
    const addItem = () =>{
        if (count < stock) {
            setCount(count+1);
            
       }
    } 
    const substractItem = () =>{
        if (count > 0){
            setCount(count-1)
            
        }
    }

    return (

        <div className="container">
            <div className="row">
            <Button  className="col-md-3" variant="secondary" onClick={substractItem}>  -  </Button>
            <h3 className="col-md-3">{count}</h3>
            <Button className="col-md-3" variant="secondary" onClick={addItem}>  +  </Button>
            {count>0 && <Button  className="col-md-4 addToCartButton"  onClick={()=>onAdd(count)} variant="secondary">Agregar al carrito</Button> }
            </div>
            
            
        </div>
    )
}