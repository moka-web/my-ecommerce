import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
export const ItemCount = ({stock,initial,onAdd}) =>{
    
    const [count,setCount]  = useState(initial);
    
    
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

        <div className="conatainer">
            <div className="row">
            <Button  className="col-md-3" variant="primary" onClick={substractItem}>  -  </Button>
            <h3 className="col-md-3">{count}</h3>
            <Button className="col-md-3" variant="primary" onClick={addItem}>  +  </Button>
            </div>
            
            {count>0? <Button onClick={()=>onAdd(count)} variant="primary">Agregar al carrito</Button>:<></>}
        </div>
    )
}