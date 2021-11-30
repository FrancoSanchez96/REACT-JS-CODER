import './App.css';
import Nav from './Components/Nav/Nav';
import ItemListC from './Components/ItemListC';
import ItemCounts from './Components/ItemCounts';
function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemListC saludo = 'HOLA'/>
      <ItemListC saludo = 'PROBANDO'/>
      <ItemCounts/>
      
      
      
      

    </div>
  );
}

export default App;
