import { useContext } from 'react';
import carrito from '../assets/carrito-white.png'
import { CartContext } from '../../Context/cartContext';
import './Carrito.css'

export const Carrito = ({count}) =>{
    const {productsCount} = useContext(CartContext);
    return(
        <div className=" CartWidget">
            <img src={carrito} className="cart" />
            {productsCount > 0 &&  <span className='spanCount'>{count}</span> } 
        </div>
    )

}