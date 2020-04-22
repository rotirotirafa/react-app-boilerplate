import React from 'react';

const Company = (props) => {
    const params = props.match.params;
    return <h1>Nome da empresa: {params.name}</h1>
}

export default Company;