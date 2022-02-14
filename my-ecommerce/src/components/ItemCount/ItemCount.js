import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
export const ItemCount = ({stock,initial,onAdd}) =>{
    
    const [count,setCount]  = useState(initial);
    const [myStock,setMyStock] = useState(stock)
    
    const addItem = () =>{
        if (count < stock) {
            setCount(count+1);
            setMyStock(myStock-1)
       }
    } 
    const substractItem = () =>{
        if (count > 1){
            setCount(count-1)
            setMyStock(myStock+1)
        }
    }

    return (

        <div style={{margin:'10px'}}>
            
            <h3>{count}</h3>
            <Button variant="primary" onClick={substractItem}>disminuir</Button>
            <Button variant="primary" onClick={addItem}>aumentar</Button>
        </div>
    )
}