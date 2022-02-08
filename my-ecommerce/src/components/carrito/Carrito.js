import carrito from '../assets/carrito.png'
import './Carrito.css'

export const Carrito = () =>{
    return(
        <div className="CartWidget">
            <img src={carrito} style = {{width:30, height:30}}/>
            <span>0</span>
        </div>
    )

}