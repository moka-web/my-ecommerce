import { ItemCount } from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const Item = (prducto,tipo,imagen,stock,descripcion)=> {

    
    return(
        
        <>
        
        <Card style={{ width: '18rem',  }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <ItemCount initial={1}  stock={5}/>
                <Button variant="primary">Agregar</Button>
            </Card.Body>
           
        </Card>
       
        </>


    );
        
       
       

}