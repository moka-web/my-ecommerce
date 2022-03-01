import { Item } from "../Item/Item";
import '../ItemList/itemlistcss/ItemList.css'
export const ItemList = ({Productos}) =>{



    return (
        
        
        <div className="container ">
            <div className="row ItemlistFlex">
        {

        Productos.length!==0?Productos.map((prods)=>(<Item className="col-md-4" {...prods} key={prods.id} />))
        :<h1>Loading...</h1>

        }
          
          </div>     
        </div>
    )

}