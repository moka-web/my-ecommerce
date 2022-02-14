import {ItemList} from "../ItemList/ItemList"
import {Productos} from "/Users/Usuario/Desktop/my-ecommerce/my-ecommerce/src/Data/Data"


export const ItemListContainer = ({greetings}) =>{

   
    
    
return (
    <>
    <div>
        <h1>
            {greetings}
        </h1>
        <div>
            <ItemList/>
        <br></br>
        </div>
    </div>
    </>
)

}