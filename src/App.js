import { useState } from 'react'

import './App.css';
import GivenName from './components/GivenName';
import Saudacao from './components/Saudacao.js';



function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Atualização com State Lift</h1>
      <GivenName setNome={setNome} />
      <Saudacao nome = {nome} />
    </div>
  );
}

export default App;
