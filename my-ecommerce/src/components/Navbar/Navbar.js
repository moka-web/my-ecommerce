import './Navbar.css'
import {Carrito} from '../carrito/Carrito';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import { useContext } from 'react';

export const Navbar = () =>{
    const {productsCount} = useContext(CartContext);
   
    return (
    <header>
        

        <nav className="Navbar" >
            <NavLink className="navLogo" to={"/"}>
            <div className="Logo">Buyers </div>
            </NavLink>
            <ul className="Navbar__ul" >
                <li className="Navbar__ul__li">    
                    <NavLink  to={"/"}>Inicio</NavLink>
                </li>
                <li className="Navbar__ul__li" >    
                    <NavLink  to={"/category/Bourbon"}>Bourbon</NavLink>
                </li>
                <li className="Navbar__ul__li" >    
                    <NavLink  to={"/category/Scotch"}>Scotch</NavLink>
                </li>
                <li className="Navbar__ul__li" >    
                    <NavLink  to={"/category/Irish"}>Irish</NavLink>
                </li>
               
            </ul>
            <Carrito count={productsCount}/> 
        </nav>
    </header>
);

}