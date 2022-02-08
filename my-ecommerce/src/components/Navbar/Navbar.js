import './Navbar.css'
import {Carrito} from '../carrito/Carrito';

export const Navbar = () =>{
return (
    <header>
        

        <nav className="Navbar" >
            <a className="Logo">Buyers</a>
            <ul className="Navbar__ul" >
                <li className="Navbar__ul__li">    
                    <a>INICIO</a>
                </li>
                <li className="Navbar__ul__li" >    
                    <a>PRODUCTOS</a>
                </li>
                <li className="Navbar__ul__li" >    
                    <a>NOSOTROS</a>
                </li>
            </ul>
            <Carrito/>
        </nav>
    </header>
);

}