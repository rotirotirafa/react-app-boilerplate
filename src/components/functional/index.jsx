import React, { useState } from 'react';

const FunctionalComponent = props => {
	const [ primeiro, setPrimeiro ] = useState(1);
	const [ segundo, setSegundo ] = useState(2);
    return ( 
		<>
			<p>Primeiro: {primeiro}</p>
			<p>Segundo:{segundo}</p>
			<button onClick={() => setPrimeiro(5)}>Muda primeiro</button>
			<button onClick={() => setSegundo(10)}>Muda segundo</button>
		</>
		);
}

export default FunctionalComponent;