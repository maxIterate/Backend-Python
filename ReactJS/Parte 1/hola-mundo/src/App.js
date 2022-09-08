import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactState from './components/container/contactState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio */}
        {/* <Greeting name="Masi"/> */}
        {/* Componente funcional de ejemplo */}
        {/* <GreetingF name="Masi"/> */}
        {/* Componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        <ContactState></ContactState>
      </header>
    </div>
  );
}

export default App;
