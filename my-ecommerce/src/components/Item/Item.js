import { ItemCount } from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, NavLink } from "react-router-dom"
import '../Item/Item.css'

export const Item = ({id,Producto,Tipo,Img,Stock,Descripcion})=> {

    
    return(
        
        <>
        
        <Card className="CardItem shadow" style={{ width: '18rem',  }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body>
                <NavLink to={`/item/${id}`}>
                <Card.Title>{Producto}</Card.Title>
                </NavLink>
                <Card.Title>{Tipo}</Card.Title>
            </Card.Body>
           
        </Card>
       
        </>


    );
        
       
       

}