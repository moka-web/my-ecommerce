
import carrito from '../assets/carrito-white.png'

import './Carrito.css'

export const Carrito = ({count}) =>{
    return(
        <div className=" CartWidget">
            <img src={carrito} className="cart" />
            <span className='spanCount'>{count}</span>
        </div>
    )

}