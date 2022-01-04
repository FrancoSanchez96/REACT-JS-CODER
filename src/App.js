import './App.css';
import Nav from './Components/Nav/Nav';
import ItemContainer from './Containers/ItemContainer';
import ItemDetailContainer from './Containers/ItemDetalContainer';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { CartContextProvider } from './Components/CartContext';


function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
        <Nav/>
        <Switch>

          <Route exact path ='/'>
            <ItemContainer />
          </Route>

          <Route path="/category/:categoryId">
            <ItemContainer/>
          </Route>

          <Route path ='/product/:paramId'>
            <ItemDetailContainer/>
          </Route>

          </Switch>
        </BrowserRouter>
       </div>
      </CartContextProvider>
      
      

  );
}

export default App;
