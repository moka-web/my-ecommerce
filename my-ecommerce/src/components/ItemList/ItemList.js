import { Item } from "../Item/Item";
import '../ItemList/itemlistcss/ItemList.css'
export const ItemList = ({Productos}) =>{

    return (
        
        
        <div className="container ">
            <div className="row ItemlistFlex">
        {Productos.map((prods)=>{
            return(<Item className="col-md-4" {...prods} key={prods.id} />)
            
        })}
          
          </div>     
        </div>
    )

}