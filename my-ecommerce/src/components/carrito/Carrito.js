//import carrito from '../assets/carrito.png';
import carrito from '../assets/carrito-white.png'

import './Carrito.css'

export const Carrito = () =>{
    return(
        <div className=" CartWidget">
            <img src={carrito} className="cart" />
            <span>0</span>
        </div>
    )

}