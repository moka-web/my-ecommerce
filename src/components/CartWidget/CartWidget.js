import { useContext } from 'react';
import carrito from '../assets/carrito-white.png'
import { CartContext } from '../../Context/cartContext';
import './Carrito.css'

export const CartWidget = ({count}) =>{
    const {productsCount} = useContext(CartContext);
    return(

        <>
        <img src={carrito} className="cart" alt='img'/>
            {productsCount > 0 &&  <span className='spanCount'>{count}</span> }
        </>
        
    )

}