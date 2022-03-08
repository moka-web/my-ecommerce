import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { CartContext } from "../../Context/cartContext"
import { Fragment, useContext } from "react"
import  './Cart.css'
import { Link } from 'react-router-dom'

export const Cart = () =>{
    const {cartProducts,removeItems,clearCart,finalPrice} = useContext(CartContext);

return (
    <>
        <div className='container'>
            <div className='row cartController'>
                {cartProducts.length === 0 ? (<h2>No hay productos agregados! <Link to={"/"}>
                    <button className='btn btn-success'>Seguir comprando!</button></Link> </h2> ) 
                    :(cartProducts.map((prod)=>{
                    return(
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img className='CartImg' variant="top" src={prod.Img} style={{ height: '300px'}} />
                                <Card.Body>
                                    <Card.Title>{prod.Producto}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{prod.quantity}</ListGroupItem>
                                    <ListGroupItem>Precio por unidad: ${prod.Precio}</ListGroupItem>
                                    <ListGroupItem>Precio por cantidad: ${prod.quantity * prod.Precio}</ListGroupItem>
                                </ListGroup>
                            
                                <button onClick={() =>removeItems(prod)}>eliminar producto</button>
                            </Card>
                        </div>)
                    }))}
            </div>    
        </div>
        {cartProducts.length>0 &&        
        (   <div className='cartButtonController'>
                <button className=' clearCartButton btn btn-danger' onClick={clearCart}>vaciar carrito</button>    
                <div className='btn btn-warning'>Precio Total: ${finalPrice}</div>
                <Link to={"/"}>
                    <button className='btn btn-success'>Seguir comprando!</button>
                </Link>
            </div>) 
        }
    </>
)



}