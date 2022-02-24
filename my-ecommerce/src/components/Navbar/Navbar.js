import './Navbar.css'
import {Carrito} from '../carrito/Carrito';
import { NavLink } from 'react-router-dom';

export const Navbar = () =>{
return (
    <header>
        

        <nav className="Navbar" >
            <NavLink className="navLogo" to={"/"}>
            <a className="Logo">Buyers</a>
            </NavLink>
            <ul className="Navbar__ul" >
                <li className="Navbar__ul__li">    
                    <NavLink activeClassName="active" to={"/"}>Inicio</NavLink>
                </li>
                <li className="Navbar__ul__li" >    
                    <NavLink activeClassName="active" to={"/category/Bourbon"}>Bourbon</NavLink>
                </li>
                <li className="Navbar__ul__li" >    
                    <NavLink activeClassName="active" to={"/category/Scotch"}>Scotch</NavLink>
                </li>
                <li className="Navbar__ul__li" >    
                    <NavLink  activeClassName="active" to={"/category/Irish"}>Irish</NavLink>
                </li>
               
            </ul>
            <Carrito/>
        </nav>
    </header>
);

}