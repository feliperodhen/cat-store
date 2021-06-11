import './App.css';
import styled from 'styled-components';
import { NavBar } from './components/Nav/NavBar';

function App() {

let name = "Tienda de gatitos (: 🐱‍👤";

let handleClick = () => alert('🐭');

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;



  return (
    <div className="App">
      <NavBar></NavBar>
    
        <p>
          Bienvenido a {name}
        </p>
        <Button onClick={handleClick}>Enviar</Button>

    </div>
  );
}

export default App;