import './App.css';
import Nav from './Components/Nav/Nav';
import ItemListC from './Components/ItemListC';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListC saludo = 'HOLA'/>
      <ItemListC saludo = 'PROBANDO'/>
      
      
      
      

    </div>
  );
}

export default App;
