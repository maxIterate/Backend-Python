/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente')
        //espacio solo pensado para la inicialización de variables no de peticiones php, etc.
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount: Justo al acabar el montaje del componente, antes de renderizarlo')
        // Momento idóneo para pedir datos a base de datos en caso de necesitarlos, antes de que se monte el componente.
        // Donde se requieren los datos antes de renderizarlos
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props')
        //cuando va a recibir nuevas props por parte del padre
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Controla si el componente debe actualzarse o no
        // retorna true o false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {

} 