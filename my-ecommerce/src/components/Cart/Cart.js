import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { CartContext } from "../../Context/cartContext"
import {useContext, useEffect, useState } from "react"
import  './Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { CartForm } from '../Form/CartForm'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import db from '../../Services/Firebase'
import Swal from 'sweetalert2'

export const Cart = () =>{
    const {cartProducts,removeItems,clearCart,finalPrice} = useContext(CartContext);
    const[order,setorder] = useState()
    const[orderRef,setOrderRef] = useState()
    
    const sendOrder = async (e)=>{
        e.preventDefault()
        let order = {
            buyer:{
                name:e.target[0].value,
                email:e.target[1].value,
                phone:e.target[2].value,
            },

            date:Timestamp.fromDate(new Date()),
            items:cartProducts,
            total:finalPrice,

        }
        setorder(order)
        try {
            const queryCollection = collection(db,'orders')
            const docRef = await addDoc(queryCollection,order)
            const docRefId = docRef.id
            setOrderRef(docRefId)

        } catch (error) {
            console.log('error',error)
        }

        setTimeout(()=>{
            clearCart()
        },500)
    } 


  

  
return (
    <>
        {orderRef?(<div className='container'><h1>Su compra ha sido procesada.</h1><h2> codigo de seguimiento:{orderRef}</h2></div>) : ( <div className='container'> 
            <div className='row cartController'>
                {cartProducts.length === 0 ? (<h2 className='cartEmpty'>No hay productos agregados! <Link to={"/"}>
                    
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
            {cartProducts.length>0 &&        
            (  <div className='cartButtonController'>
                <button className=' clearCartButton btn btn-danger' onClick={clearCart}>vaciar carrito</button>    
                <div className='btn btn-warning'>Precio Total: ${finalPrice}</div>
                <Link to={"/"}>
                    <button className='btn btn-success'>Seguir comprando!</button>
                </Link>
                <form onSubmit={sendOrder}>
                    <input type='text' placeholder='Nombre'/>
                    <input type='email' placeholder='Email'/>
                    <input type='number' placeholder='Telefono'/>
                    <button type='submit'>enviar</button>
                </form>
            </div>)
        }    
        </div>
       
        )}
       
    </>
)

}