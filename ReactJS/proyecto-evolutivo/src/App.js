import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactState from './components/container/contactState';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
// import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
    <h1 className='text-red-500 hover:text-red-900'>Holaaa xddd</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio */}
        {/* <Greeting name="Masi"/> */}
        {/* Componente funcional de ejemplo */}
        {/* <GreetingF name="Masi"/> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejercicio 1,2,3 */}
        {/* <ContactState></ContactState> */}
        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre="Martín">
        {/* Todo lo que hay aquí, es tratado como props.children, por defecto nos traerá el h3, que es un elemento HTML*/}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
