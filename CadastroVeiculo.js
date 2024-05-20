import React from 'react';
import Header from '../components/Header';
import FormCadastroVeiculo from '../components/FormCadastroVeiculo';

function CadastroVeiculo() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <FormCadastroVeiculo />
        </div>
      </main>
      <footer>
        <p>2024 Controle de Estacionamento Condomínio. Contato 048 9999-9999. Email condominio01@contato.com</p>
      </footer>
    </>
  );
}
