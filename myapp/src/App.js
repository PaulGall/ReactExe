import TodoList from './components/TodoList';
import './App.css';

function App() {

  const arrNames = ['Paolo', 'Margot', 'Alessandro'];

  return <div>
          <TodoList name = {arrNames}/>
        </div>
}

export default App;