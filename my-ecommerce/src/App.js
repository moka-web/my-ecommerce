
import './App.css';
import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/Home/Home';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './Context/cartContext';

function App() {

 return (
  <>
    <CartProvider>
      <BrowserRouter>
          <div className="App">
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/category/:Tipo' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </div> 
        </BrowserRouter>
    </CartProvider>
  </>

  );
}

export default App;
