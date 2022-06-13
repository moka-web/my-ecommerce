import './Navbar.css'
import {CartWidget} from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';
import { useContext, useState } from 'react';
import styled from 'styled-components'
import { BurguerButton } from './BurguerButton';

export const Navbar = () =>{
  const {productsCount} = useContext(CartContext);
   const [clicked, setClicked] = useState(false)
   const handleClick =()=>{
       setClicked(!clicked)
   }

    return (
    <header>
       <>
      <NavContainer >
          <NavLink className="navLogo" to={"/"}>
            <div className="Logo">Buyers </div>
          </NavLink>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <NavLink onClick={clicked && handleClick} to={"/"}>Inicio</NavLink>
          <NavLink onClick={clicked && handleClick} to={"/category/Bourbon"}>Bourbon</NavLink>
          <NavLink onClick={clicked && handleClick} to={"/category/Scotch"}>Scotch</NavLink>
          <NavLink onClick={clicked && handleClick} to={"/category/Irish"}>Irish</NavLink>
          <NavLink onClick={clicked && handleClick} to={"/cart"}>
          <CartWidget count={productsCount}/>
          </NavLink> 
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
        
    </header>
);

}

const NavContainer = styled.nav`
 padding: .4rem;
 background-color: #333;
 display: flex;
 align-items: center;
 justify-content: space-between;

 h2{
     color: white;
     font-size: 400;
 }

 a{
     text-decoration: none;
     margin-right: 1rem;
 }
 .burguer{
     z-index: 2;
     @media(min-width: 768px){
         z-index: 2;
         display: none ;
     }
 }

 .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

 .links.active{
     width: 100%;
     display: block;
     margin-left: auto;
     margin-right: auto;
     top: 30%;
     left: 0;
     right: 0;
     text-align: center;
     z-index: 2;
     a{
         color: white;
     }
 }


`


const BgDiv = styled.div`
  background-color: #333;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .6s ease ;
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`