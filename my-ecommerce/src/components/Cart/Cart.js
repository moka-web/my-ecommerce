import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { CartContext } from "../../Context/cartContext"
import { Fragment, useContext } from "react"

export const Cart = () =>{
    const {cartProducts,removeItems} = useContext(CartContext);

return (
    <>

        {cartProducts.length === 0 ? (<h2>No hay productos agregados!</h2>) :(cartProducts.map((prod)=>{
            
            return(
               <> 
              <h2>{prod.Producto}</h2>
              <img src={prod.Img} ></img>
              <h3>{prod.quantity}</h3>
              <button onClick={(prod)=>removeItems(prod)}>eliminar producto</button>
              </>
            )
            
            }))}
           
        
        
       

    </>
)



}