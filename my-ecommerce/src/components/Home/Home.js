import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import Carousel from 'react-bootstrap/Carousel'
export const Home = ()=>{

return(
    <div>
        <Carousel fade className="Carousel">
        <Carousel.Item>
            <img
            className="d-block w-100 img_carousel"
            src="https://cdn.pixabay.com/photo/2020/12/24/14/11/whiskey-5857543_1280.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 img_carousel"
            src="https://ezrabrooks.com/wp-content/uploads/2018/10/10-28_EZB_Image1.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 img_carousel"
            src="https://ruybangtim.com/wp-content/uploads/2016/05/background_stakan_kubiki_ice_alcohol_drink_ultra_3840x2160_hd-wallpaper-233149.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
       <ItemListContainer />
    </div>
)

}