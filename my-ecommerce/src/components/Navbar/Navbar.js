import './Navbar.css'
import {Carrito} from '../carrito/Carrito';
import { NavLink } from 'react-router-dom';
export const Navbar = () =>{
return (
    <header>
        

        <nav className="Navbar" >
            <a className="Logo">Buyers</a>
            <ul className="Navbar__ul" >
                <li className="Navbar__ul__li">    
                    <NavLink to={"/"}>Inicio</NavLink>
                </li>
                <li className="Navbar__ul__li" >    
                    <NavLink to={"/category/:id"}>Catalogo</NavLink>
                </li>
               
            </ul>
            <Carrito/>
        </nav>
    </header>
);

}