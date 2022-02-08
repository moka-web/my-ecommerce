
import './App.css';
import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {

 return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings="bienvenidos a mi proyecto!"/>
    </div>
  );
}

export default App;
