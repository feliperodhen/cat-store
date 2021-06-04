import './App.css';

function App() {

let name = "felipe";

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hola soy {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
