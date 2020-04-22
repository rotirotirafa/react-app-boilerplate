import React from 'react';

const Company = (props) => {
    const params = props.match.params;
    return (
        <>  
            <h1>Nome da empresa: {params.name}</h1>
            <p>{props.message? props.message : 'Não há mensagem'}</p>
            <h1>{props.volume? props.volue : 'Não há volume'}</h1>
        </>
    );
}

export default Company;