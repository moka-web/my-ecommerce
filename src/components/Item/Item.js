import Card from 'react-bootstrap/Card'
import { NavLink } from "react-router-dom"
import '../Item/Item.css'

export const Item = ({id,Producto,Tipo,Img,Stock,Descripcion})=> {

    
    return(
        
        <>
        
        <Card className="CardItem " style={{ width: '18rem',  }}>

            <Card.Img variant="top"  className="ImgItem" src={Img} />
            <Card.Body>
                <NavLink  className="itemLink" to={`/item/${id}`}>
                <Card.Title>{Producto}</Card.Title>
                <Card.Title>{Tipo}</Card.Title>
                </NavLink>
            </Card.Body>
           
        </Card>
       
        </>


    );
        
       
       

}