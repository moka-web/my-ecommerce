import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetal.css'
import Button from "react-bootstrap/esm/Button"
import { CartContext } from "../../Context/cartContext"
import { useContext, useState } from "react"


export const ItemDetail = ({id,Producto,Tipo,Descripcion,Img,Stock,Precio})=>{

    const {addItemsToCart} = useContext(CartContext);
    
    const [ disableButton, setDisableButton] = useState(false)
    
    const handleItemCount = (e)=>{
        addItemsToCart({id,Producto,Tipo,Descripcion,Img,Stock,Precio},e);
        setDisableButton(true);
    }

   
    return(
<div className="container">
    <div className=" ItemDetail_div img-thumbnail shadow container">
        <h1>{Producto}</h1>
        <div className=" ItemDetail_div container">
            <div className="row">
                <div className="divBorder col-md-6">
                    <img className="ItemDetail_img rounded shadow img-thumbnail" alt="img" src={Img}></img>
                </div>
                <div className=" divBorder col-md-6">
                    <div className="ItemDescription_div conatainer">
                        <p>{Tipo}</p>
                        <p>{Descripcion}</p>
                        <p>{Stock}</p>
                    </div>
                    <div className="ItemCount_div container">
                        {!disableButton && <ItemCount initial={0}  stock={Stock} onAdd={(e)=>handleItemCount(e)}/>}
                        {disableButton &&(<> <Link to={"/cart"}><Button variant="secondary" className="finishBuyButton">Finalizar compra</Button></Link><Link to={"/"}><Button variant="secondary" className="finishBuyButton">Seguir comprando</Button></Link></>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
)
}