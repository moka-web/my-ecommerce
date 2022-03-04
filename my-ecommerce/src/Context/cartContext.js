import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children})=>{
        const [cartProducts , setCartProducts] = useState([]);
        const [productsCount , setProductsCount] = useState(0)
 
  
        const addItemsToCart = (item,quantity)=>{
            if (cartProducts.some(product => product.id === item.id)) {
                const copyPaste = [...cartProducts];
                const prodIndex = cartProducts.findIndex(product => product.id === item.id);
                copyPaste[prodIndex]={
                    ...copyPaste[prodIndex],
                    quantity: copyPaste[prodIndex].quantity + quantity,
                };
                setCartProducts(copyPaste);
                setProductsCount(prev => prev + quantity)
            
            }else{
                
                setCartProducts([...cartProducts,{...item,quantity}])
                setProductsCount(prev => prev + quantity)}
                
        }
        

       
        const removeItems = (item) =>{

           const removed = cartProducts.filter(prod => prod.id === item.id)
            setCartProducts(removed)
           
        }





    return( 

        <CartContext.Provider value={{cartProducts,productsCount,addItemsToCart,removeItems}}>{children}</CartContext.Provider>

     )
      

}