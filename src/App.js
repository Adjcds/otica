import React from 'react';
import Topo from './componentes/Topo';
import SecaoCapa from './componentes/SecaoCapa';
import SecaoContato from './componentes/SecaoContato';
import SecaoProdutos from './componentes/SecaoProdutos';
import SecaoSobre from './componentes/SecaoSobre';


function App() {
  return (
    <div>
      <Topo />
      <SecaoCapa />
      <SecaoContato />
      <SecaoProdutos />
      <SecaoSobre />
    </div>
  );
}

export default App;