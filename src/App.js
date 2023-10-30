import React from 'react';
import Topo from './componentes/Topo';
import SecaoCapa from './componentes/SecaoCapa';
import SecaoProdutos from './componentes/SecaoProdutos';
import SecaoSobre from './componentes/SecaoSobre';
import SecaoContato from './componentes/SecaoContato';

function App() {
  return (
    <div>
      <Topo />
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </div>
  );
}

export default App;