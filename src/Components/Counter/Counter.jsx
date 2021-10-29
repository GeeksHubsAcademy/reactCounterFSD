
import React, { Component } from 'react';

import "./Counter.css";

class Counter extends Component {

    constructor(props) {
        super(props); // Requerido!!

        this.state = { 
            manolo: 10
        };
    }

    componentDidMount(){ //el componente se ha montado
        console.log("HOLA, ME HE MONTADO y manolo vale ", this.state.manolo);
    }

    componentDidUpdate(){ //el componente se ha actualizado
        console.log("AHORA SE HA ACTUALIZADO,...y manolo vale ...", this.state.manolo);
    }

    increment(){
        this.setState({manolo : this.state.manolo + 1});
    }

    decrement(){
        this.setState({manolo : this.state.manolo - 1});
    }

    render() {
        return (
            <div className="contenedorContador">
                <div onClick={()=>this.increment()} className="boton">+</div>
                <div className="resultado">{this.state.manolo}</div>
                <div onClick={()=>this.decrement()} className="boton">-</div>
            </div>
        )
    };
}

export default Counter;
