import logo from './logo.svg';
import './App.css';

function App() {
  const codename= 'Alphabet'

  const newCodename = codename.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://picsum.photos/200'
  // const urlplaceholder = 'https://via.placeholder.com/150'


  return (
    <div className="App">
      <h2>Alteração JSX</h2>
      <p>Projeto entitulado de {newCodename}</p>
      <p>Versão : 2023a{sum(0,1)}</p>
      <img src={url} alt="Imagem gerada"/>
    </div>
  );
}

export default App;
