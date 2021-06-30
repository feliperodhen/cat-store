import './App.css';
import { NavBar } from './components/Nav/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  const titlePage = 'Cat-Store'


  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer title={titlePage}/>
    </div>
  );
}

export default App;