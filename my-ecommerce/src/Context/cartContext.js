import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children})=>{
        const [cartProducts , setCartProducts] = useState([]);
        const [productsCount , setProductsCount] = useState(0)
 
        const AddQuantityToCart = (number)=>{
           setProductsCount(  number ) 
        }
        const AddProductToCart = (product)=>{
           setCartProducts(product)
        }
    



        
    return( 

        <CartContext.Provider value={{cartProducts,productsCount,AddQuantityToCart,AddProductToCart}}>{children}</CartContext.Provider>

     )
      

}