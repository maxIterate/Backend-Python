import React, { Component } from 'react'; //indica que el archivo está orientado a react
import PropTypes from 'prop-types';
// proptypes utilizados para saber qué pinta el tipo de dato que estamos pasandole. Dado que en JS tenemos un lenguaje de tipado inferido, por eso tenemos que buscar la manera de que la gente utilice nuestro componente de manera correcta.

class Greeting extends Component { //Component requiere render()

    constructor(props) {
        super(props) //hereda propiedades del constructor
        this.state = {
            age: 29,

        } //valor privado, información que puede modificarse y que cuando se modificase actualizaría la vista
    }

    // props, información que le voy a pasar por atributos
    // state, información privada del componente que sirve para gestionarse o mostrar el contenido, hacer una lógica, etc.
    // serían como las propiedades de la clase.
    // el state es inmutable a menos que utilice una función especifica para cambiarlo la cual: setState

    render() {
        return (
            <div>
                <h1>Hola mucho gusto { this.props.name }</h1>
                <h2>Tu edad es de: { this.state.age }</h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
                {
                    age: prevState.age + 1
                }
            ))
    }
}
//los componentes tienen un estado inmutado, un nuevo estado genera una nueva renderización del componente

//en JSX no podemos renderizar más de un elemento a la vez




Greeting.propTypes = { //propTypes, el contenido que yo le puedo pasar a un componente desde un componente de orden superior
    name: PropTypes.string,
};


export default Greeting;
