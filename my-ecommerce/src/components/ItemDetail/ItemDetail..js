import { useParams, Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetal.css'
import Button from "react-bootstrap/esm/Button"
import React, {useState} from "react"

export const ItemDetail = ({Producto,Tipo,Descripcion,Img,Stock})=>{
   
    const [cart, setCart] = useState(0);


    const handleItemCount = (e)=>{
        setCart(e)
        
    }

    const motrar = ()=>{
        console.log('aca ya me guardo los datos ' ,cart);
    }

    motrar();

    return(
<div className="container">
    <div className=" ItemDetail_div img-thumbnail shadow container">
        <h1>{Producto}</h1>
        <div className=" ItemDetail_div container">
            <div className="row">
                <div className="divBorder col-md-6">
                    <img className="ItemDetail_img rounded shadow img-thumbnail" src={Img}></img>
                </div>
                <div className=" divBorder col-md-6">
                    <div className="ItemDescription_div conatainer">
                        <p>{Tipo}</p>
                        <p>{Descripcion}</p>
                        <p>{Stock}</p>
                    </div>
                    <div className="ItemCount_div">
                        {cart==0?<ItemCount initial={0}  stock={Stock} onAdd={(e)=>handleItemCount(e)}/>:<> <Link to={"/cart"}><Button>Finalizar compra</Button></Link></>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
)
}