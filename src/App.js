import './App.css';
import ListDtype from './components/ListDtype';


function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas (Data Type)</h1>
    <ListDtype itens={meusItens}/>     
    <ListDtype itens={[]}/>      
    </div>
  );
}

export default App;
