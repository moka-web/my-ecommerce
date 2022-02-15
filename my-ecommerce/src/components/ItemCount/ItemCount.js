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
        if (count > 1){
            setCount(count-1)
            
        }
    }

    return (

        <div>
            
            <h3>{count}</h3>
            <Button variant="primary" onClick={substractItem}>disminuir</Button>
            <Button variant="primary" onClick={addItem}>aumentar</Button>
        </div>
    )
}