import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { CartContext } from "../../Context/cartContext"
import {useContext, useState } from "react"
import  './Cart.css'
import { Link, } from 'react-router-dom'
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

        console.log(order.buyer.name)
        setorder(order)
        try {
            if (order.buyer.name !== '' && order.buyer.email !== '' && order.buyer.phone !== '' ) {
                const queryCollection = collection(db,'orders')
                const docRef = await addDoc(queryCollection,order)
                const docRefId = docRef.id
                setOrderRef(docRefId)
                clearCart()
            }else{
                Swal.fire({
                    icon: 'warning',
                    text:'debe completar los campos corrtectamente',
                })
            }
            
        } catch (error) {
            console.log('error',error)
        }
    } 



const buySucess = ()=>{
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Su compra a sido generada, su codigo de seguimiento es :',
            text: orderRef,
            })     
    },1000);
     
    return( <h2 className='cartEmpty'>No hay productos agregados! <Link to={"/"}>
                                    
    <button className='btn btn-success'>Seguir comprando!</button></Link> </h2> )
    
}




return (
    <>
        {orderRef? buySucess()
            : ( 
                <div className='container'> 
                    <div className='row cartController'>
                        <div className='col-md-8'>
                            <div className='container'>
                                <div className='row'>
                                    {cartProducts.length === 0 ? (<h2 className='cartEmpty'>No hay productos agregados! <Link to={"/"}>
                                    
                                    <button className='btn btn-success'>Seguir comprando!</button></Link> </h2> ) 
                                    
                                    :(cartProducts.map((prod)=>{
                                    return(
                                    <div key={prod.id} className='col-md-4'>
                                            <Card  style={{ width: '15rem'}}>
                                                <Card.Img className='CartImg' variant="top" src={prod.Img} style={{ height: '300px'}} />
                                                <Card.Body>
                                                    <Card.Title>{prod.Producto}</Card.Title>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>{prod.quantity}</ListGroupItem>
                                                    <ListGroupItem>Precio por unidad: ${prod.Precio}</ListGroupItem>
                                                    <ListGroupItem>Precio por cantidad: ${prod.quantity * prod.Precio}</ListGroupItem>
                                                </ListGroup>
                                            
                                                <button className='btn btn-secondary' onClick={() =>removeItems(prod)}>eliminar producto</button>
                                            </Card>
                                        </div>)
                                    }))}
                                </div>    
                            </div>    
                        </div>
                        
                        <div className='col-md-4'>  
                            <div className='conatainer'> 
                                <div className='row'> 
                                    <div className='col-md-12'>      
                                        {cartProducts.length>0 &&        
                                            (<div className='cartButtonController row '>
                                                <div className='col-md-4'>
                                                    <div className='container'>
                                                        <div className='column'>

                                                            <div>
                                                                <form onSubmit={sendOrder} className='container'>
                                                                    <div className=' formStyles row '>
                                                                        <input className='form-control mt-2' type='text' placeholder='Nombre'/>
                                                                        <input className='form-control mt-2' type='email' placeholder='Email'/>
                                                                        <input  className='form-control mt-2' type='number' placeholder='Telefono'/>
                                                                        <button className='btn btn-secondary mt-2'  type='submit'>enviar</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                                <br></br>
                                                                <div className='conatainer'>
                                                                    <div className='button-flex'>
                                                                        <div className=''>
                                                                            <button className=' clearCartButton btn btn-danger' onClick={clearCart}>vaciar carrito</button> 
                                                                        </div> 
                                                                        <div className='' >  
                                                                            <div className='btn totalPricebutton btn-warning'>Precio Total: ${finalPrice}</div>
                                                                        </div>
                                                                        <div className=''>
                                                                            <Link to={"/"}>
                                                                                <button className='btn btn-success letBuyButton '>Seguir comprando!</button>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </div>            
                                                    </div>  
                                                </div>
                                            </div>
                                            )
                                        }
                                    </div>
                                </div>    
                            </div>           
                        </div>
                    </div>
                    
                </div>
            
                )}
            
            </>
        )

        }