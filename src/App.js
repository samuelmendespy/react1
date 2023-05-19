import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {

  const nome = "Corporation"
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Alphabet" />
      <SayMyName nome="ACME" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Megacorp" 
      idade="3" 
      profissao="Programador" 
      foto="https://picsum.photos/150"
      />

    </div>
  );
}

export default App;
