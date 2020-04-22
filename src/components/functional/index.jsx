import React, { useState } from 'react';

const FunctionalComponent = props => {
	const [ primeiro, setPrimeiro ] = useState(1);
	const [ segundo, setSegundo ] = useState(2);

	const Alunos = [ 'Rafael Rotiroti', 'João', 'Enzo', 'Breno' ];

	const listarAlunos = (alunos) => {
		return alunos.map(aluno => <li>{aluno}</li>)
	}
    return ( 
		<>
			<p>Primeiro: {primeiro}</p>
			<p>Segundo:{segundo}</p>
			<button onClick={() => setPrimeiro(5)}>Muda primeiro</button>
			<button onClick={() => setSegundo(10)}>Muda segundo</button>
			<h1>Qtd de alunos: {Alunos.length}</h1>
			<ul>
				{listarAlunos(Alunos)}
			</ul>
		</>
	);
}

export default FunctionalComponent;