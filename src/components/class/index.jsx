import React, { Component } from 'react';

export default class ClassComponent extends Component {
    state = { 
        teste: 'Oi, sou o state estranho.'
    }
    render() {
        return (
            <>
            <h1>Sou um Class Component com: {this.state.teste}</h1>
            </>
        );
    }
}