import { useParams } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import '../ItemDetail/ItemDetal.css'
import Button from "react-bootstrap/esm/Button"
export const ItemDetail = ({Producto,Tipo,Descripcion,Img,Stock})=>{
   
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
                        <ItemCount initial={1}  stock={Stock}/>
                        <Button variant="primary">Agregar</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
)
}