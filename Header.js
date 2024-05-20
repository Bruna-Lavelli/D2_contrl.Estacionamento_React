import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-group">
        <a href="/vagas-cadastradas" type="button">Vagas Cadastradas</a>
        <a href="/vagas-disponiveis" type="button">Vagas Disponíveis</a>
      </div>
    </header>
  );
}

export default Header;
