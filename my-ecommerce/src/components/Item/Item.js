import { ItemCount } from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const Item = ({Producto,Tipo,Img,Stock,Descripcion})=> {

    
    return(
        
        <>
        
        <Card style={{ width: '18rem',  }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{Producto}</Card.Title>
                <Card.Title>{Tipo}</Card.Title>
                <Card.Text>{Descripcion}</Card.Text>
                <ItemCount initial={1}  stock={Stock}/>
                <Button variant="primary">Agregar</Button>
            </Card.Body>
           
        </Card>
       
        </>


    );
        
       
       

}