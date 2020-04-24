import React from 'react';

import FunctionalComponent from './components/functional';
import ClassComponent from './components/class';

//Exemplo de conexão
import { connect } from 'react-redux';

// Usar Hooks


function App() {
  return (
    <>
      <h1>Componente Funcional: <FunctionalComponent /></h1>
      <h1>Componente de Classe: <ClassComponent /></h1>
    </>
  );
}

export default App;
