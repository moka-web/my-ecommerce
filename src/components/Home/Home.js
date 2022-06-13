import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import './Home.css'
import { Footer } from "../Footer/Footer"
export const Home = ()=>{

return(
    <div >
        <div>
            <h1 className="logoHome">Buyers.</h1>
            <h3 className="subtitleHome">the house of whiskey</h3>
            <img className="imgHome" alt="img" src="https://ruybangtim.com/wp-content/uploads/2016/05/background_stakan_kubiki_ice_alcohol_drink_ultra_3840x2160_hd-wallpaper-233149.jpg"></img>
        </div>
     
       <ItemListContainer />
        <Footer></Footer>
    </div>
)

}

//<img className="imgHome" alt="img" src="https://ruybangtim.com/wp-content/uploads/2016/05/background_stakan_kubiki_ice_alcohol_drink_ultra_3840x2160_hd-wallpaper-233149.jpg"></img>