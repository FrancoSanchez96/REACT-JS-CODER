import './App.css';
import Nav from './Components/Nav/Nav';
import ItemListC from './Components/ItemListC';
import ItemCounts from './Components/ItemCounts';

function App() {

  const initialStock={
    initial : 1,
    stock : 12
  }
  return (
    <div className="App">
      <Nav/>
      <ItemListC saludo = 'HOLA'/>
      <ItemListC saludo = 'PROBANDO'/>
      <ItemCounts initialStock={initialStock}/>
      
      
      
      
      
      

    </div>
  );
}

export default App;
