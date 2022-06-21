import './App.css';
import { useState } from "react";

function App() {

  const [numero, setNumero] = useState<number>(0);
 

  function addNumber () {
    setNumero(numero + 1);
  }
  
  return (
    <div className="App">
     <h1>{numero}</h1>
     <button onClick={addNumber}>Clique</button>
    </div>
  );
}

export default App;
