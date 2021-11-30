import './App.css';
import Nav from './Components/Nav/Nav';
import ItemListC from './Components/ItemListC';
import ItemContainer from './Containers/ItemContainer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListC saludo = 'HOLA'/>
      <ItemListC saludo = 'PROBANDO'/>
      <ItemContainer/>
      
      
      
      
      

    </div>
  );
}

export default App;
