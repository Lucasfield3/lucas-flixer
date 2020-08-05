import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro videos</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
