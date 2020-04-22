import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            teste: 'Oi, sou o state estranho.'
        }
    }
    

    //Default LLC
    async componentDidCatch(){}
    async componentDidMount(){}
    async componentDidUpdate(){}
    async componentWillMount(){}
    async componentWillReceiveProps(){}
    async componentWillUnmount(){}
    async componentWillUpdate(){}

    render() {
        return (
            <>
                <h1>Sou um Class Component com: {this.state.teste}</h1>
                <p>{this.props.message? this.props.message : 'Não há mensagem'}</p>
            </>
        );
    }
}